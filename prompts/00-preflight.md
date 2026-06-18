# 00 Set Up Salesforce Environment

If Claude Code is not installed, see the install guide:
https://docs.claude.com/en/docs/claude-code/overview

```bash
# Any OS with Node 18+
npm install -g @anthropic-ai/claude-code
claude
```

> **Facilitator tip — smoother live demos:** the build milestones (4–8) fire many `bash` / `Edit` / `Write` calls. Launch with `claude --permission-mode acceptEdits` (or set `CLAUDE_PERMISSION_MODE=acceptEdits` first) so file edits and shell commands auto-approve during the session. Otherwise expect a permission prompt per command.

Prompt: prepare the Salesforce workstation.

```text
Set up this machine for Salesforce development. Check each prerequisite and fix anything that is missing. Ask me before running interactive commands like browser logins.

1. Node/npm: Run node --version and npm --version. Node must be 20+. If missing or too old, install Node 20 with the appropriate method for this OS (brew install node on macOS, or nvm install 20) and verify.
2. Salesforce CLI: Run sf --version. If missing, install with npm install -g @salesforce/cli, then verify.
3. Salesforce CLI workflow library (`forcedotcom/sf-skills`): These are reusable Salesforce CLI workflows the build prompts call into via `npx skills` — they are NOT Claude Code skills. Check whether the workflow library is installed by running `npx skills list`. I need these workflows available before the workshop build starts:
   - generating-custom-object
   - generating-custom-field
   - generating-permission-set
   - generating-lwc-components
   - generating-flexipage
   - generating-list-view
   - deploying-metadata
   - handling-sf-data
   - running-apex-tests
   - running-code-analyzer
   - building-ui-bundle-app
   - building-ui-bundle-frontend
   - generating-ui-bundle-metadata
   - using-ui-bundle-salesforce-data
   - deploying-ui-bundle
   If any are missing, install with `npx skills add forcedotcom/sf-skills`, then re-run `npx skills list` and report the final installed workflows.
4. Multi-Framework React skill for Claude Code: Module 7 needs the `sf-multiframework` skill installed locally so Claude Code auto-activates it when building the React on Salesforce app. Check whether `~/.claude/skills/sf-multiframework/SKILL.md` exists. If not, install it by cloning into the user-scope skills directory:
   mkdir -p ~/.claude/skills && git clone https://github.com/dylandersen/sf-multiframework.git ~/.claude/skills/sf-multiframework
   Then verify `~/.claude/skills/sf-multiframework/SKILL.md` exists.
5. Salesforce Developer account and auth: Run sf org list --all. If no orgs appear, tell me to sign up for a free Salesforce Developer Edition at https://developer.salesforce.com/form/signup/freetrial.jsp, then run sf org login web so I can authenticate in the browser.
6. Target org: Run sf config get target-org --json. If no target org is set, set my authenticated org as the default with sf config set target-org=<my-username> and create an alias with sf alias set acme-trial=<my-username>.

After each fix, re-verify before moving to the next step. When everything passes, confirm this machine is ready to build on Salesforce.
```

Expected evidence:

- Node 20+ and npm print versions.
- Salesforce CLI prints a version.
- `npx skills list` shows the `forcedotcom/sf-skills` workflows above as installed.
- `~/.claude/skills/sf-multiframework/SKILL.md` exists.
- At least one authenticated Developer Edition org is visible.
- Target org is set and ready for metadata deploys.
