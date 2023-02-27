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

	res.status(200).json({ data: page });
};

export default handler;
