import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "GET") {
		res.setHeader("Allow", "GET");
		return res.status(405).json({ error: "Method not allowed" });
	}

	const token = process.env.NOTION_INTEGRATION_TOKEN;
	const configuredPageId = process.env.NOTION_PAGE_ID;
	if (!token || !configuredPageId) {
		return res.status(503).json({ error: "Notion integration is not configured" });
	}

	const pageId = Array.isArray(req.query.pageId)
		? req.query.pageId[0]
		: req.query.pageId;
	if (pageId !== "default") {
		return res.status(404).json({ error: "Page not found" });
	}

	const notion = new Client({
		auth: token,
	});

	try {
		const page = await notion.pages.retrieve({ page_id: configuredPageId });
		const children = await notion.blocks.children.list({
			block_id: configuredPageId,
			page_size: 50,
		});

		return res.status(200).json({ data: { page, children } });
	} catch (error) {
		console.error("Notion request failed", error);
		return res.status(502).json({ error: "Unable to retrieve the page" });
	}
};

export default handler;
