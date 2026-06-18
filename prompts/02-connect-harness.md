# 02 Connect Claude Code to Salesforce

Prompt: configure the Salesforce MCP server from the new local Salesforce project so Claude Code can inspect orgs, deploy metadata, query data, and run validation commands through local Salesforce CLI auth.

```text
Configure the Salesforce MCP server for Claude Code in this local project.

Use the local Salesforce CLI auth and DEFAULT_TARGET_ORG so the MCP server follows whichever org we set as default.

From inside the project root, run:

claude mcp add --transport stdio --scope project salesforce-dx -- npx -y @salesforce/mcp@latest --orgs DEFAULT_TARGET_ORG --toolsets orgs,metadata,data,users --tools run_apex_test --allow-non-ga-tools

The `--scope project` flag writes the server config to `.mcp.json` in this project so it travels with the workshop folder. Use `--scope user` instead if you want it available everywhere on this machine.

Verify with:

claude mcp list
claude mcp get salesforce-dx

Then prove the connection by listing connected Salesforce orgs, the current target org, and available Salesforce MCP tools.

Explain that this runs locally, uses Salesforce CLI auth, and does not grant arbitrary production access beyond the authenticated org.
```

Expected evidence:

- `claude mcp list` shows `salesforce-dx` connected.
- The current Salesforce target org appears.
- Toolsets include orgs, metadata, data, users, and Apex test execution.
