import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
	auth: process.env.NOTION_INTEGRATION_TOKEN,
});

const getChildren = async (pageId: string) => {
	const children = await notion.blocks.children.list({
		block_id: pageId as string,
		page_size: 50,
	});

	return children;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(`New request - ID:${req.query.pageId}`);

	const page = await notion.pages.retrieve({
		page_id: req.query.pageId as string,
	});

	const children = await notion.blocks.children.list({
		block_id: req.query.pageId as string,
		page_size: 50,
	});

	const nestedChildren = children.results.map(async (child: any) => {
		if (!child.has_children) {
			return child;
		} else {
			const res = await getChildren(child.id);
		}
	});

	res.status(200).json({ data: { page, children } });
};

export default handler;
