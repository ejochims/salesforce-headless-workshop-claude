import React from "react";
import { CodeBlock } from "../components/CodeBlock";
import { colors, layout } from "../theme";
import { Intro, ReferenceStack } from "./WhatIsMCP";

const setupScript = `# Install prerequisites
npm install -g @salesforce/cli

# Sign up at https://developer.salesforce.com/form/signup/freetrial.jsp
# Then authenticate:
sf org login web

# Set as default target org
sf config set target-org=<your-username>
sf alias set acme-trial=<your-username>

# Create local project
sf project generate --name acme-transport-workshop
cd acme-transport-workshop`;

const claudeCodeInstall = `# Any OS with Node 18+
npm install -g @anthropic-ai/claude-code

# Start Claude Code
claude`;

export function ScratchOrgSetup() {
  return (
    <ReferenceStack>
      <Intro
        title="Salesforce Setup Basics"
        body="Step 0 confirms Claude Code is available and a Salesforce org exists before the build starts. This workshop uses a free Developer Edition org, but Claude Code can connect to any org supported by Salesforce CLI authentication when the team has the right permissions and deployment guardrails."
      />

      <CodeBlock code={`https://docs.claude.com/en/docs/claude-code/overview`} lang="text" title="Claude Code install guide" />
      <CodeBlock code={claudeCodeInstall} lang="bash" title="Install Claude Code" />
      <CodeBlock code={`https://developer.salesforce.com/form/signup/freetrial.jsp`} lang="text" title="Sign up for a free Salesforce Developer Edition org" />
      <CodeBlock code={setupScript} lang="bash" title="Developer Edition setup commands" />

      <div style={{ display: "grid", gap: "10px" }}>
        {[
          ["Claude Code", "The local coding harness used for the workshop. If you do not have it installed, get it from https://docs.claude.com/en/docs/claude-code/overview."],
          ["Salesforce CLI", "The local command-line tool Claude Code uses to authenticate, deploy metadata, and query data."],
          ["Developer Edition", "A free, permanent Salesforce org for building and testing. Sign up at https://developer.salesforce.com/form/signup/freetrial.jsp."],
          ["Target org", "The default org that CLI and Salesforce MCP commands operate against."],
          ["Metadata", "Files under force-app/main/default that define objects, fields, permissions, LWC, and app pages."],
          ["Permission set", "The deployable access artifact that makes generated fields, objects, and app assets usable."],
          ["Operations dashboard", "The Lightning app page and LWC that make the generated transportation records visible in the org."],
        ].map(([label, desc]) => (
          <div
            key={label}
            style={{
              padding: "12px 14px",
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: layout.radiusSm,
              fontSize: "13px",
              color: colors.text,
              lineHeight: 1.55,
            }}
          >
            <strong style={{ color: colors.ink }}>{label}:</strong> {desc}
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "14px 16px",
          background: colors.yellowBg,
          border: "1px solid #FEDF89",
          borderRadius: layout.radiusSm,
          fontSize: "13px",
          color: colors.text,
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: colors.yellow }}>Live decision:</strong> The primary path uses a free Developer Edition org.
        No Dev Hub or scratch org required. Claude Code can also target a sandbox or production org through Salesforce CLI
        auth when release controls are in place. If org signup is blocked by network policy, have participants share one
        pre-provisioned org for follow-along.
      </div>
    </ReferenceStack>
  );
}
