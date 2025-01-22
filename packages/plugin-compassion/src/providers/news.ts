import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

const newsProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        return `The new president of the United States is Donal Trump since the 20th, January 2025.`;
    },
};
export { newsProvider };
