/**
 * status show command
 */

import { Command } from "commander";
import chalk from "chalk";
import { loadPlan } from "@riotprompt/riotplan";
import { outputPlanSummary, outputStepList } from "./index";

/**
 * Create the show command
 */
export function showCommand(): Command {
    return new Command("show")
        .description("Show plan status")
        .argument("[path]", "Path to plan directory", ".")
        .option("-v, --verbose", "Show detailed status with steps")
        .option("--json", "Output as JSON")
        .action(async (path, options) => {
            try {
                const plan = await loadPlan(path);

                if (options.json) {
                    // eslint-disable-next-line no-console
                    console.log(JSON.stringify({
                        name: plan.metadata.name,
                        code: plan.metadata.code,
                        status: plan.state.status,
                        progress: plan.state.progress,
                        currentStep: plan.state.currentStep,
                        steps: plan.steps.map((s) => ({
                            number: s.number,
                            title: s.title,
                            status: s.status,
                        })),
                        blockers: plan.state.blockers,
                    }, null, 2));
                    return;
                }

                outputPlanSummary(plan);

                if (options.verbose) {
                    // eslint-disable-next-line no-console
                    console.log();
                    // eslint-disable-next-line no-console
                    console.log("Steps:");
                    outputStepList(plan.steps);
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(chalk.red("✗") + ` Failed to load plan: ${(error as Error).message}`);
                process.exit(1);
            }
        });
}
