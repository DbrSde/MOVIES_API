import Configuration from "./Configuration";

export default class Console {

    public static debug(message?: any, ...optionalParams: any[]): void{
        if (Configuration.IS_DEBUG_MODE){
            console.info("%c" + message, Configuration.CONSOLE_DEBUG_STYLE, ...optionalParams);
        }
    }

    public static info(type: string, message?: any, ...optionalParams: any[]):void {
        if (Configuration.IS_DEBUG_MODE){
            console.groupCollapsed(type);
            console.log(`%c ----------------- ${type} -----------------`, Configuration.CONSOLE_STYLE);
            console.log(message, ...optionalParams);
            console.log(`%c ------------------------------------------`, Configuration.CONSOLE_STYLE);
            console.groupEnd();
        }
    }
}
