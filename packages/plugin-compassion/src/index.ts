import { Plugin } from "@elizaos/core";
import { factEvaluator } from "./evaluators/fact.ts";
import { goalEvaluator } from "./evaluators/goal.ts";
import { boredomProvider } from "./providers/boredom.ts";
import { factsProvider } from "./providers/facts.ts";
import { timeProvider } from "./providers/time.ts";
import { loveAction } from "./actions/love.ts";
import { newsProvider } from "./providers/news.ts";

export * as actions from "./actions/index.ts";
export * as evaluators from "./evaluators/index.ts";
export * as providers from "./providers/index.ts";

export const compassionPlugin: Plugin = {
    name: "compassion",
    description: "Agent sharing compassion with encouraging",
    actions: [loveAction],
    evaluators: [factEvaluator, goalEvaluator],
    providers: [newsProvider, boredomProvider, timeProvider, factsProvider],
};
