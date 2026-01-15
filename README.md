# @riotprompt/riotplan-commands-status

Status commands for RiotPlan CLI.

## Installation

```bash
npm install @riotprompt/riotplan-commands-status
```

## Usage

```typescript
import { Command } from 'commander';
import { registerStatusCommands } from '@riotprompt/riotplan-commands-status';

const program = new Command();
registerStatusCommands(program);
program.parse();
```

## Commands

### `status [path]`

Show plan status.

```bash
riotplan status
riotplan status ./my-plan
riotplan status --verbose
riotplan status --json
```

## License

Apache-2.0
