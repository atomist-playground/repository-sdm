import {
    CompressingGoalCache,
    configure,
    hasRepositoryGoals,
    repositoryDrivenContainer,
} from "@atomist/sdm-core";
import * as os from "os";
import * as path from "path";

export const configuration = configure(async sdm => {

    sdm.configuration.sdm.cache = {
        enabled: true,
        path: path.join(os.homedir(), ".atomist", "cache", "container"),
        store: new CompressingGoalCache(),
    };

    return {
        plan: {
            test: hasRepositoryGoals,
            goals: repositoryDrivenContainer(),
        },
    };

});
