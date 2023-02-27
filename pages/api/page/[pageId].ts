import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const notion = new Client({
		auth: process.env.NOTION_INTEGRATION_TOKEN,
	});

	console.log(`New request - ID:${req.query.pageId}`);

	const page = await notion.pages.retrieve({
		page_id: req.query.pageId as string,
	});

	const children = await notion.blocks.children.list({
		block_id: req.query.pageId as string,
		page_size: 50,
	});

	res.status(200).json({ data: { page, children } });
};

export default handler;
