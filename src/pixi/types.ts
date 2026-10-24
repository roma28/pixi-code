import { Package, PythonEnvironment } from '@vscode/python-environments';

export interface PixiInfo {
    project_info?: {
        name: string;
        manifest_path: string;
    };
    environments_info: Array<{
        name: string;
        prefix: string;
    }>;
}

export interface PixiPackage {
    name: string;
    version: string;
    is_explicit: boolean;
}

export interface PixiEnvironment extends PythonEnvironment {
    pixiInfo: PixiInfo;
    /** The real pixi environment name (e.g. "default"), as opposed to the display name. */
    pixiEnvName: string;
    packages: Package[];
}
