import { Parser } from 'src/helpers/parser';
import { WorkSpace } from 'src/models';
import { SSOApi } from 'src/services/networking';

export const fetchWorkSpaces = async (): Promise<WorkSpace[]> => {
    try {
        const { data } = await SSOApi.getMyWorkspaces();
        return data.workspaces.map((item: any) => Parser.parseWorkspace(item));
    } catch (e) {
        return [];
    }
};
export const setCurrentWorkSpaces = async (workspace: WorkSpace): Promise<void> => {
    await SSOApi.setCurrentWorkspace(workspace.id);
};
export const switchWorkSpaceActions = { fetchWorkSpaces, setCurrentWorkSpaces };
