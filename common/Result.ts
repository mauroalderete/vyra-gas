export interface IResult {
    isSuccess: boolean
    error: string
}

export class Result<T> implements IResult {
    readonly isSuccess: boolean
    readonly error: string
    private value: T

    private constructor(isSuccess: boolean, error?: string, value?: T){

        if (isSuccess && !(error===undefined || error===null)){
            throw new Error(`InvalidOperation: A result cannot be successful and contain an error::${error}`)
        }
        if(!isSuccess && (error===undefined || error===null)){
            throw new Error(`InvalidOperation: A failing result needs to contain an error message`)
        }

        this.isSuccess = isSuccess
        this.error = error
        this.value = value

        Object.freeze(this)
    }

    public getValue() : T {
        if (!this.isSuccess){
            console.log(this.error)
            throw new Error("Cant retrieve the value from a failed result")
        }

        return this.value;
    }

    
    public static ok<U>(value: U) : Result<U>{
        return new Result<U>(true, undefined, value);
    }

    public static fail<U>(error: string) : Result<U>{
        return new Result<U>(false, error);
    }

    public static combine(results: Result<any>[]) : Result<any>{

        for(let result of results){
            if (!result.isSuccess) {
                return result
            }
        }

        return Result.ok(results);
    }
}