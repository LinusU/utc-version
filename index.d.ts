declare interface Options { apple?: boolean; short?: boolean }

declare function utcVersion(options: Options): string
declare function utcVersion(date?: Date, options?: Options): string

export = utcVersion
