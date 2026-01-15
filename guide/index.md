# AI Agent Guide: riotplan-commands-status

**Role**: You are an AI assistant working with `@riotprompt/riotplan-commands-status`.

**Goal**: Understand and extend status commands for the RiotPlan CLI.

## Core Capabilities

This package provides status commands:
- `status [path]` - Show plan status

## Quick Start

```typescript
import { Command } from 'commander';
import { registerStatusCommands } from '@riotprompt/riotplan-commands-status';

const program = new Command();
registerStatusCommands(program);
program.parse();
```

## Utility Functions

- `getStatusIcon(status)` - Get emoji icon for a status
- `outputPlanSummary(plan)` - Output plan summary to console
- `outputStepList(steps)` - Output step list to console

## Links

- [RiotPlan Core](../riotplan/)
- [RiotPlan CLI](../riotplan-cli/)
