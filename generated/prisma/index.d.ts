
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Calendar
 * 
 */
export type Calendar = $Result.DefaultSelection<Prisma.$CalendarPayload>
/**
 * Model FieldTrip
 * 
 */
export type FieldTrip = $Result.DefaultSelection<Prisma.$FieldTripPayload>
/**
 * Model UserProjectRelation
 * 
 */
export type UserProjectRelation = $Result.DefaultSelection<Prisma.$UserProjectRelationPayload>
/**
 * Model PI
 * 
 */
export type PI = $Result.DefaultSelection<Prisma.$PIPayload>
/**
 * Model PIProjectRelation
 * 
 */
export type PIProjectRelation = $Result.DefaultSelection<Prisma.$PIProjectRelationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LocationType: {
  CAMPUS: 'CAMPUS',
  FIELDTRIP: 'FIELDTRIP'
};

export type LocationType = (typeof LocationType)[keyof typeof LocationType]


export const AttendanceSession: {
  FN: 'FN',
  AF: 'AF'
};

export type AttendanceSession = (typeof AttendanceSession)[keyof typeof AttendanceSession]


export const AttendanceType: {
  FULL_DAY: 'FULL_DAY',
  HALF_DAY: 'HALF_DAY'
};

export type AttendanceType = (typeof AttendanceType)[keyof typeof AttendanceType]

}

export type LocationType = $Enums.LocationType

export const LocationType: typeof $Enums.LocationType

export type AttendanceSession = $Enums.AttendanceSession

export const AttendanceSession: typeof $Enums.AttendanceSession

export type AttendanceType = $Enums.AttendanceType

export const AttendanceType: typeof $Enums.AttendanceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendar`: Exposes CRUD operations for the **Calendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendar.findMany()
    * ```
    */
  get calendar(): Prisma.CalendarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldTrip`: Exposes CRUD operations for the **FieldTrip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldTrips
    * const fieldTrips = await prisma.fieldTrip.findMany()
    * ```
    */
  get fieldTrip(): Prisma.FieldTripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProjectRelation`: Exposes CRUD operations for the **UserProjectRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProjectRelations
    * const userProjectRelations = await prisma.userProjectRelation.findMany()
    * ```
    */
  get userProjectRelation(): Prisma.UserProjectRelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pI`: Exposes CRUD operations for the **PI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PIS
    * const pIS = await prisma.pI.findMany()
    * ```
    */
  get pI(): Prisma.PIDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pIProjectRelation`: Exposes CRUD operations for the **PIProjectRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PIProjectRelations
    * const pIProjectRelations = await prisma.pIProjectRelation.findMany()
    * ```
    */
  get pIProjectRelation(): Prisma.PIProjectRelationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Attendance: 'Attendance',
    Calendar: 'Calendar',
    FieldTrip: 'FieldTrip',
    UserProjectRelation: 'UserProjectRelation',
    PI: 'PI',
    PIProjectRelation: 'PIProjectRelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "attendance" | "calendar" | "fieldTrip" | "userProjectRelation" | "pI" | "pIProjectRelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Calendar: {
        payload: Prisma.$CalendarPayload<ExtArgs>
        fields: Prisma.CalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findFirst: {
            args: Prisma.CalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findMany: {
            args: Prisma.CalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          create: {
            args: Prisma.CalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          createMany: {
            args: Prisma.CalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          update: {
            args: Prisma.CalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          deleteMany: {
            args: Prisma.CalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          aggregate: {
            args: Prisma.CalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendar>
          }
          groupBy: {
            args: Prisma.CalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarCountAggregateOutputType> | number
          }
        }
      }
      FieldTrip: {
        payload: Prisma.$FieldTripPayload<ExtArgs>
        fields: Prisma.FieldTripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldTripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldTripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>
          }
          findFirst: {
            args: Prisma.FieldTripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldTripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>
          }
          findMany: {
            args: Prisma.FieldTripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>[]
          }
          create: {
            args: Prisma.FieldTripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>
          }
          createMany: {
            args: Prisma.FieldTripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FieldTripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>
          }
          update: {
            args: Prisma.FieldTripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>
          }
          deleteMany: {
            args: Prisma.FieldTripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldTripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FieldTripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldTripPayload>
          }
          aggregate: {
            args: Prisma.FieldTripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldTrip>
          }
          groupBy: {
            args: Prisma.FieldTripGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldTripGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldTripCountArgs<ExtArgs>
            result: $Utils.Optional<FieldTripCountAggregateOutputType> | number
          }
        }
      }
      UserProjectRelation: {
        payload: Prisma.$UserProjectRelationPayload<ExtArgs>
        fields: Prisma.UserProjectRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProjectRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProjectRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>
          }
          findFirst: {
            args: Prisma.UserProjectRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProjectRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>
          }
          findMany: {
            args: Prisma.UserProjectRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>[]
          }
          create: {
            args: Prisma.UserProjectRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>
          }
          createMany: {
            args: Prisma.UserProjectRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProjectRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>
          }
          update: {
            args: Prisma.UserProjectRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>
          }
          deleteMany: {
            args: Prisma.UserProjectRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProjectRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProjectRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProjectRelationPayload>
          }
          aggregate: {
            args: Prisma.UserProjectRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProjectRelation>
          }
          groupBy: {
            args: Prisma.UserProjectRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProjectRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProjectRelationCountArgs<ExtArgs>
            result: $Utils.Optional<UserProjectRelationCountAggregateOutputType> | number
          }
        }
      }
      PI: {
        payload: Prisma.$PIPayload<ExtArgs>
        fields: Prisma.PIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PIFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PIFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>
          }
          findFirst: {
            args: Prisma.PIFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PIFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>
          }
          findMany: {
            args: Prisma.PIFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>[]
          }
          create: {
            args: Prisma.PICreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>
          }
          createMany: {
            args: Prisma.PICreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PIDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>
          }
          update: {
            args: Prisma.PIUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>
          }
          deleteMany: {
            args: Prisma.PIDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PIUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PIUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIPayload>
          }
          aggregate: {
            args: Prisma.PIAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePI>
          }
          groupBy: {
            args: Prisma.PIGroupByArgs<ExtArgs>
            result: $Utils.Optional<PIGroupByOutputType>[]
          }
          count: {
            args: Prisma.PICountArgs<ExtArgs>
            result: $Utils.Optional<PICountAggregateOutputType> | number
          }
        }
      }
      PIProjectRelation: {
        payload: Prisma.$PIProjectRelationPayload<ExtArgs>
        fields: Prisma.PIProjectRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PIProjectRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PIProjectRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>
          }
          findFirst: {
            args: Prisma.PIProjectRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PIProjectRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>
          }
          findMany: {
            args: Prisma.PIProjectRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>[]
          }
          create: {
            args: Prisma.PIProjectRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>
          }
          createMany: {
            args: Prisma.PIProjectRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PIProjectRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>
          }
          update: {
            args: Prisma.PIProjectRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>
          }
          deleteMany: {
            args: Prisma.PIProjectRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PIProjectRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PIProjectRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PIProjectRelationPayload>
          }
          aggregate: {
            args: Prisma.PIProjectRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePIProjectRelation>
          }
          groupBy: {
            args: Prisma.PIProjectRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PIProjectRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PIProjectRelationCountArgs<ExtArgs>
            result: $Utils.Optional<PIProjectRelationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    attendance?: AttendanceOmit
    calendar?: CalendarOmit
    fieldTrip?: FieldTripOmit
    userProjectRelation?: UserProjectRelationOmit
    pI?: PIOmit
    pIProjectRelation?: PIProjectRelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    attendances: number
    fieldTrips: number
    userProjects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    fieldTrips?: boolean | UserCountOutputTypeCountFieldTripsArgs
    userProjects?: boolean | UserCountOutputTypeCountUserProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFieldTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldTripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProjectRelationWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    userProjects: number
    piRelations: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProjects?: boolean | ProjectCountOutputTypeCountUserProjectsArgs
    piRelations?: boolean | ProjectCountOutputTypeCountPiRelationsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUserProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProjectRelationWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPiRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PIProjectRelationWhereInput
  }


  /**
   * Count Type PICountOutputType
   */

  export type PICountOutputType = {
    piProjects: number
  }

  export type PICountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piProjects?: boolean | PICountOutputTypeCountPiProjectsArgs
  }

  // Custom InputTypes
  /**
   * PICountOutputType without action
   */
  export type PICountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PICountOutputType
     */
    select?: PICountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PICountOutputType without action
   */
  export type PICountOutputTypeCountPiProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PIProjectRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    employeeNumber: string | null
    username: string | null
    empClass: string | null
  }

  export type UserMaxAggregateOutputType = {
    employeeNumber: string | null
    username: string | null
    empClass: string | null
  }

  export type UserCountAggregateOutputType = {
    employeeNumber: number
    username: number
    empClass: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    employeeNumber?: true
    username?: true
    empClass?: true
  }

  export type UserMaxAggregateInputType = {
    employeeNumber?: true
    username?: true
    empClass?: true
  }

  export type UserCountAggregateInputType = {
    employeeNumber?: true
    username?: true
    empClass?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    employeeNumber: string
    username: string
    empClass: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeNumber?: boolean
    username?: boolean
    empClass?: boolean
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    fieldTrips?: boolean | User$fieldTripsArgs<ExtArgs>
    userProjects?: boolean | User$userProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    employeeNumber?: boolean
    username?: boolean
    empClass?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeNumber" | "username" | "empClass", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    fieldTrips?: boolean | User$fieldTripsArgs<ExtArgs>
    userProjects?: boolean | User$userProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      fieldTrips: Prisma.$FieldTripPayload<ExtArgs>[]
      userProjects: Prisma.$UserProjectRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeNumber: string
      username: string
      empClass: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `employeeNumber`
     * const userWithEmployeeNumberOnly = await prisma.user.findMany({ select: { employeeNumber: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fieldTrips<T extends User$fieldTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$fieldTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProjects<T extends User$userProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$userProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly employeeNumber: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly empClass: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.fieldTrips
   */
  export type User$fieldTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    where?: FieldTripWhereInput
    orderBy?: FieldTripOrderByWithRelationInput | FieldTripOrderByWithRelationInput[]
    cursor?: FieldTripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldTripScalarFieldEnum | FieldTripScalarFieldEnum[]
  }

  /**
   * User.userProjects
   */
  export type User$userProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    where?: UserProjectRelationWhereInput
    orderBy?: UserProjectRelationOrderByWithRelationInput | UserProjectRelationOrderByWithRelationInput[]
    cursor?: UserProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProjectRelationScalarFieldEnum | UserProjectRelationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    projectCode: string | null
    department: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    projectCode: string | null
    department: string | null
  }

  export type ProjectCountAggregateOutputType = {
    projectCode: number
    department: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    projectCode?: true
    department?: true
  }

  export type ProjectMaxAggregateInputType = {
    projectCode?: true
    department?: true
  }

  export type ProjectCountAggregateInputType = {
    projectCode?: true
    department?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    projectCode: string
    department: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectCode?: boolean
    department?: boolean
    userProjects?: boolean | Project$userProjectsArgs<ExtArgs>
    piRelations?: boolean | Project$piRelationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    projectCode?: boolean
    department?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectCode" | "department", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProjects?: boolean | Project$userProjectsArgs<ExtArgs>
    piRelations?: boolean | Project$piRelationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      userProjects: Prisma.$UserProjectRelationPayload<ExtArgs>[]
      piRelations: Prisma.$PIProjectRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projectCode: string
      department: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `projectCode`
     * const projectWithProjectCodeOnly = await prisma.project.findMany({ select: { projectCode: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProjects<T extends Project$userProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Project$userProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    piRelations<T extends Project$piRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$piRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly projectCode: FieldRef<"Project", 'String'>
    readonly department: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.userProjects
   */
  export type Project$userProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    where?: UserProjectRelationWhereInput
    orderBy?: UserProjectRelationOrderByWithRelationInput | UserProjectRelationOrderByWithRelationInput[]
    cursor?: UserProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProjectRelationScalarFieldEnum | UserProjectRelationScalarFieldEnum[]
  }

  /**
   * Project.piRelations
   */
  export type Project$piRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    where?: PIProjectRelationWhereInput
    orderBy?: PIProjectRelationOrderByWithRelationInput | PIProjectRelationOrderByWithRelationInput[]
    cursor?: PIProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PIProjectRelationScalarFieldEnum | PIProjectRelationScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    audioDuration: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    audioDuration: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    employeeNumber: string | null
    date: Date | null
    checkinTime: Date | null
    checkoutTime: Date | null
    sessionType: $Enums.AttendanceSession | null
    attendanceType: $Enums.AttendanceType | null
    locationType: $Enums.LocationType | null
    takenLocation: string | null
    photoUrl: string | null
    audioUrl: string | null
    audioDuration: number | null
    latitude: number | null
    longitude: number | null
    locationAddress: string | null
    county: string | null
    state: string | null
    postcode: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    employeeNumber: string | null
    date: Date | null
    checkinTime: Date | null
    checkoutTime: Date | null
    sessionType: $Enums.AttendanceSession | null
    attendanceType: $Enums.AttendanceType | null
    locationType: $Enums.LocationType | null
    takenLocation: string | null
    photoUrl: string | null
    audioUrl: string | null
    audioDuration: number | null
    latitude: number | null
    longitude: number | null
    locationAddress: string | null
    county: string | null
    state: string | null
    postcode: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    employeeNumber: number
    date: number
    checkinTime: number
    checkoutTime: number
    sessionType: number
    attendanceType: number
    locationType: number
    takenLocation: number
    photoUrl: number
    audioUrl: number
    audioDuration: number
    latitude: number
    longitude: number
    locationAddress: number
    county: number
    state: number
    postcode: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    audioDuration?: true
    latitude?: true
    longitude?: true
  }

  export type AttendanceSumAggregateInputType = {
    audioDuration?: true
    latitude?: true
    longitude?: true
  }

  export type AttendanceMinAggregateInputType = {
    employeeNumber?: true
    date?: true
    checkinTime?: true
    checkoutTime?: true
    sessionType?: true
    attendanceType?: true
    locationType?: true
    takenLocation?: true
    photoUrl?: true
    audioUrl?: true
    audioDuration?: true
    latitude?: true
    longitude?: true
    locationAddress?: true
    county?: true
    state?: true
    postcode?: true
  }

  export type AttendanceMaxAggregateInputType = {
    employeeNumber?: true
    date?: true
    checkinTime?: true
    checkoutTime?: true
    sessionType?: true
    attendanceType?: true
    locationType?: true
    takenLocation?: true
    photoUrl?: true
    audioUrl?: true
    audioDuration?: true
    latitude?: true
    longitude?: true
    locationAddress?: true
    county?: true
    state?: true
    postcode?: true
  }

  export type AttendanceCountAggregateInputType = {
    employeeNumber?: true
    date?: true
    checkinTime?: true
    checkoutTime?: true
    sessionType?: true
    attendanceType?: true
    locationType?: true
    takenLocation?: true
    photoUrl?: true
    audioUrl?: true
    audioDuration?: true
    latitude?: true
    longitude?: true
    locationAddress?: true
    county?: true
    state?: true
    postcode?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    employeeNumber: string
    date: Date
    checkinTime: Date | null
    checkoutTime: Date | null
    sessionType: $Enums.AttendanceSession | null
    attendanceType: $Enums.AttendanceType | null
    locationType: $Enums.LocationType
    takenLocation: string | null
    photoUrl: string | null
    audioUrl: string | null
    audioDuration: number | null
    latitude: number | null
    longitude: number | null
    locationAddress: string | null
    county: string | null
    state: string | null
    postcode: string | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeNumber?: boolean
    date?: boolean
    checkinTime?: boolean
    checkoutTime?: boolean
    sessionType?: boolean
    attendanceType?: boolean
    locationType?: boolean
    takenLocation?: boolean
    photoUrl?: boolean
    audioUrl?: boolean
    audioDuration?: boolean
    latitude?: boolean
    longitude?: boolean
    locationAddress?: boolean
    county?: boolean
    state?: boolean
    postcode?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    employeeNumber?: boolean
    date?: boolean
    checkinTime?: boolean
    checkoutTime?: boolean
    sessionType?: boolean
    attendanceType?: boolean
    locationType?: boolean
    takenLocation?: boolean
    photoUrl?: boolean
    audioUrl?: boolean
    audioDuration?: boolean
    latitude?: boolean
    longitude?: boolean
    locationAddress?: boolean
    county?: boolean
    state?: boolean
    postcode?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeNumber" | "date" | "checkinTime" | "checkoutTime" | "sessionType" | "attendanceType" | "locationType" | "takenLocation" | "photoUrl" | "audioUrl" | "audioDuration" | "latitude" | "longitude" | "locationAddress" | "county" | "state" | "postcode", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeNumber: string
      date: Date
      checkinTime: Date | null
      checkoutTime: Date | null
      sessionType: $Enums.AttendanceSession | null
      attendanceType: $Enums.AttendanceType | null
      locationType: $Enums.LocationType
      takenLocation: string | null
      photoUrl: string | null
      audioUrl: string | null
      audioDuration: number | null
      latitude: number | null
      longitude: number | null
      locationAddress: string | null
      county: string | null
      state: string | null
      postcode: string | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `employeeNumber`
     * const attendanceWithEmployeeNumberOnly = await prisma.attendance.findMany({ select: { employeeNumber: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly employeeNumber: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly checkinTime: FieldRef<"Attendance", 'DateTime'>
    readonly checkoutTime: FieldRef<"Attendance", 'DateTime'>
    readonly sessionType: FieldRef<"Attendance", 'AttendanceSession'>
    readonly attendanceType: FieldRef<"Attendance", 'AttendanceType'>
    readonly locationType: FieldRef<"Attendance", 'LocationType'>
    readonly takenLocation: FieldRef<"Attendance", 'String'>
    readonly photoUrl: FieldRef<"Attendance", 'String'>
    readonly audioUrl: FieldRef<"Attendance", 'String'>
    readonly audioDuration: FieldRef<"Attendance", 'Int'>
    readonly latitude: FieldRef<"Attendance", 'Float'>
    readonly longitude: FieldRef<"Attendance", 'Float'>
    readonly locationAddress: FieldRef<"Attendance", 'String'>
    readonly county: FieldRef<"Attendance", 'String'>
    readonly state: FieldRef<"Attendance", 'String'>
    readonly postcode: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Calendar
   */

  export type AggregateCalendar = {
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  export type CalendarMinAggregateOutputType = {
    date: Date | null
    isHoliday: boolean | null
    isWeekend: boolean | null
    description: string | null
  }

  export type CalendarMaxAggregateOutputType = {
    date: Date | null
    isHoliday: boolean | null
    isWeekend: boolean | null
    description: string | null
  }

  export type CalendarCountAggregateOutputType = {
    date: number
    isHoliday: number
    isWeekend: number
    description: number
    _all: number
  }


  export type CalendarMinAggregateInputType = {
    date?: true
    isHoliday?: true
    isWeekend?: true
    description?: true
  }

  export type CalendarMaxAggregateInputType = {
    date?: true
    isHoliday?: true
    isWeekend?: true
    description?: true
  }

  export type CalendarCountAggregateInputType = {
    date?: true
    isHoliday?: true
    isWeekend?: true
    description?: true
    _all?: true
  }

  export type CalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendar to aggregate.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendars
    **/
    _count?: true | CalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarMaxAggregateInputType
  }

  export type GetCalendarAggregateType<T extends CalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar[P]>
      : GetScalarType<T[P], AggregateCalendar[P]>
  }




  export type CalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarWhereInput
    orderBy?: CalendarOrderByWithAggregationInput | CalendarOrderByWithAggregationInput[]
    by: CalendarScalarFieldEnum[] | CalendarScalarFieldEnum
    having?: CalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarCountAggregateInputType | true
    _min?: CalendarMinAggregateInputType
    _max?: CalendarMaxAggregateInputType
  }

  export type CalendarGroupByOutputType = {
    date: Date
    isHoliday: boolean
    isWeekend: boolean
    description: string | null
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  type GetCalendarGroupByPayload<T extends CalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarGroupByOutputType[P]>
        }
      >
    >


  export type CalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    isHoliday?: boolean
    isWeekend?: boolean
    description?: boolean
  }, ExtArgs["result"]["calendar"]>



  export type CalendarSelectScalar = {
    date?: boolean
    isHoliday?: boolean
    isWeekend?: boolean
    description?: boolean
  }

  export type CalendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date" | "isHoliday" | "isWeekend" | "description", ExtArgs["result"]["calendar"]>

  export type $CalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calendar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      date: Date
      isHoliday: boolean
      isWeekend: boolean
      description: string | null
    }, ExtArgs["result"]["calendar"]>
    composites: {}
  }

  type CalendarGetPayload<S extends boolean | null | undefined | CalendarDefaultArgs> = $Result.GetResult<Prisma.$CalendarPayload, S>

  type CalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarCountAggregateInputType | true
    }

  export interface CalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calendar'], meta: { name: 'Calendar' } }
    /**
     * Find zero or one Calendar that matches the filter.
     * @param {CalendarFindUniqueArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarFindUniqueArgs>(args: SelectSubset<T, CalendarFindUniqueArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarFindUniqueOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarFindFirstArgs>(args?: SelectSubset<T, CalendarFindFirstArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendar.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendar.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const calendarWithDateOnly = await prisma.calendar.findMany({ select: { date: true } })
     * 
     */
    findMany<T extends CalendarFindManyArgs>(args?: SelectSubset<T, CalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendar.
     * @param {CalendarCreateArgs} args - Arguments to create a Calendar.
     * @example
     * // Create one Calendar
     * const Calendar = await prisma.calendar.create({
     *   data: {
     *     // ... data to create a Calendar
     *   }
     * })
     * 
     */
    create<T extends CalendarCreateArgs>(args: SelectSubset<T, CalendarCreateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendars.
     * @param {CalendarCreateManyArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarCreateManyArgs>(args?: SelectSubset<T, CalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calendar.
     * @param {CalendarDeleteArgs} args - Arguments to delete one Calendar.
     * @example
     * // Delete one Calendar
     * const Calendar = await prisma.calendar.delete({
     *   where: {
     *     // ... filter to delete one Calendar
     *   }
     * })
     * 
     */
    delete<T extends CalendarDeleteArgs>(args: SelectSubset<T, CalendarDeleteArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendar.
     * @param {CalendarUpdateArgs} args - Arguments to update one Calendar.
     * @example
     * // Update one Calendar
     * const calendar = await prisma.calendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarUpdateArgs>(args: SelectSubset<T, CalendarUpdateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendars.
     * @param {CalendarDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarDeleteManyArgs>(args?: SelectSubset<T, CalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarUpdateManyArgs>(args: SelectSubset<T, CalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calendar.
     * @param {CalendarUpsertArgs} args - Arguments to update or create a Calendar.
     * @example
     * // Update or create a Calendar
     * const calendar = await prisma.calendar.upsert({
     *   create: {
     *     // ... data to create a Calendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar we want to update
     *   }
     * })
     */
    upsert<T extends CalendarUpsertArgs>(args: SelectSubset<T, CalendarUpsertArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendar.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends CalendarCountArgs>(
      args?: Subset<T, CalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarAggregateArgs>(args: Subset<T, CalendarAggregateArgs>): Prisma.PrismaPromise<GetCalendarAggregateType<T>>

    /**
     * Group by Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarGroupByArgs['orderBy'] }
        : { orderBy?: CalendarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calendar model
   */
  readonly fields: CalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Calendar model
   */
  interface CalendarFieldRefs {
    readonly date: FieldRef<"Calendar", 'DateTime'>
    readonly isHoliday: FieldRef<"Calendar", 'Boolean'>
    readonly isWeekend: FieldRef<"Calendar", 'Boolean'>
    readonly description: FieldRef<"Calendar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Calendar findUnique
   */
  export type CalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findUniqueOrThrow
   */
  export type CalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findFirst
   */
  export type CalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findFirstOrThrow
   */
  export type CalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findMany
   */
  export type CalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Filter, which Calendars to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar create
   */
  export type CalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The data needed to create a Calendar.
     */
    data: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
  }

  /**
   * Calendar createMany
   */
  export type CalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calendar update
   */
  export type CalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The data needed to update a Calendar.
     */
    data: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
    /**
     * Choose, which Calendar to update.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar updateMany
   */
  export type CalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to update.
     */
    limit?: number
  }

  /**
   * Calendar upsert
   */
  export type CalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The filter to search for the Calendar to update in case it exists.
     */
    where: CalendarWhereUniqueInput
    /**
     * In case the Calendar found by the `where` argument doesn't exist, create a new Calendar with this data.
     */
    create: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
    /**
     * In case the Calendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
  }

  /**
   * Calendar delete
   */
  export type CalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Filter which Calendar to delete.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar deleteMany
   */
  export type CalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendars to delete
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to delete.
     */
    limit?: number
  }

  /**
   * Calendar without action
   */
  export type CalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
  }


  /**
   * Model FieldTrip
   */

  export type AggregateFieldTrip = {
    _count: FieldTripCountAggregateOutputType | null
    _min: FieldTripMinAggregateOutputType | null
    _max: FieldTripMaxAggregateOutputType | null
  }

  export type FieldTripMinAggregateOutputType = {
    fieldTripKey: string | null
    employeeNumber: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    isActive: boolean | null
    createdBy: string | null
  }

  export type FieldTripMaxAggregateOutputType = {
    fieldTripKey: string | null
    employeeNumber: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    isActive: boolean | null
    createdBy: string | null
  }

  export type FieldTripCountAggregateOutputType = {
    fieldTripKey: number
    employeeNumber: number
    startDate: number
    endDate: number
    description: number
    isActive: number
    createdBy: number
    _all: number
  }


  export type FieldTripMinAggregateInputType = {
    fieldTripKey?: true
    employeeNumber?: true
    startDate?: true
    endDate?: true
    description?: true
    isActive?: true
    createdBy?: true
  }

  export type FieldTripMaxAggregateInputType = {
    fieldTripKey?: true
    employeeNumber?: true
    startDate?: true
    endDate?: true
    description?: true
    isActive?: true
    createdBy?: true
  }

  export type FieldTripCountAggregateInputType = {
    fieldTripKey?: true
    employeeNumber?: true
    startDate?: true
    endDate?: true
    description?: true
    isActive?: true
    createdBy?: true
    _all?: true
  }

  export type FieldTripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldTrip to aggregate.
     */
    where?: FieldTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldTrips to fetch.
     */
    orderBy?: FieldTripOrderByWithRelationInput | FieldTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldTrips
    **/
    _count?: true | FieldTripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldTripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldTripMaxAggregateInputType
  }

  export type GetFieldTripAggregateType<T extends FieldTripAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldTrip[P]>
      : GetScalarType<T[P], AggregateFieldTrip[P]>
  }




  export type FieldTripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldTripWhereInput
    orderBy?: FieldTripOrderByWithAggregationInput | FieldTripOrderByWithAggregationInput[]
    by: FieldTripScalarFieldEnum[] | FieldTripScalarFieldEnum
    having?: FieldTripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldTripCountAggregateInputType | true
    _min?: FieldTripMinAggregateInputType
    _max?: FieldTripMaxAggregateInputType
  }

  export type FieldTripGroupByOutputType = {
    fieldTripKey: string
    employeeNumber: string
    startDate: Date
    endDate: Date
    description: string | null
    isActive: boolean
    createdBy: string
    _count: FieldTripCountAggregateOutputType | null
    _min: FieldTripMinAggregateOutputType | null
    _max: FieldTripMaxAggregateOutputType | null
  }

  type GetFieldTripGroupByPayload<T extends FieldTripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldTripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldTripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldTripGroupByOutputType[P]>
            : GetScalarType<T[P], FieldTripGroupByOutputType[P]>
        }
      >
    >


  export type FieldTripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fieldTripKey?: boolean
    employeeNumber?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    isActive?: boolean
    createdBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldTrip"]>



  export type FieldTripSelectScalar = {
    fieldTripKey?: boolean
    employeeNumber?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    isActive?: boolean
    createdBy?: boolean
  }

  export type FieldTripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fieldTripKey" | "employeeNumber" | "startDate" | "endDate" | "description" | "isActive" | "createdBy", ExtArgs["result"]["fieldTrip"]>
  export type FieldTripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FieldTripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldTrip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fieldTripKey: string
      employeeNumber: string
      startDate: Date
      endDate: Date
      description: string | null
      isActive: boolean
      createdBy: string
    }, ExtArgs["result"]["fieldTrip"]>
    composites: {}
  }

  type FieldTripGetPayload<S extends boolean | null | undefined | FieldTripDefaultArgs> = $Result.GetResult<Prisma.$FieldTripPayload, S>

  type FieldTripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldTripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldTripCountAggregateInputType | true
    }

  export interface FieldTripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldTrip'], meta: { name: 'FieldTrip' } }
    /**
     * Find zero or one FieldTrip that matches the filter.
     * @param {FieldTripFindUniqueArgs} args - Arguments to find a FieldTrip
     * @example
     * // Get one FieldTrip
     * const fieldTrip = await prisma.fieldTrip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldTripFindUniqueArgs>(args: SelectSubset<T, FieldTripFindUniqueArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldTrip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldTripFindUniqueOrThrowArgs} args - Arguments to find a FieldTrip
     * @example
     * // Get one FieldTrip
     * const fieldTrip = await prisma.fieldTrip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldTripFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldTripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldTrip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripFindFirstArgs} args - Arguments to find a FieldTrip
     * @example
     * // Get one FieldTrip
     * const fieldTrip = await prisma.fieldTrip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldTripFindFirstArgs>(args?: SelectSubset<T, FieldTripFindFirstArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldTrip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripFindFirstOrThrowArgs} args - Arguments to find a FieldTrip
     * @example
     * // Get one FieldTrip
     * const fieldTrip = await prisma.fieldTrip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldTripFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldTripFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldTrips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldTrips
     * const fieldTrips = await prisma.fieldTrip.findMany()
     * 
     * // Get first 10 FieldTrips
     * const fieldTrips = await prisma.fieldTrip.findMany({ take: 10 })
     * 
     * // Only select the `fieldTripKey`
     * const fieldTripWithFieldTripKeyOnly = await prisma.fieldTrip.findMany({ select: { fieldTripKey: true } })
     * 
     */
    findMany<T extends FieldTripFindManyArgs>(args?: SelectSubset<T, FieldTripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldTrip.
     * @param {FieldTripCreateArgs} args - Arguments to create a FieldTrip.
     * @example
     * // Create one FieldTrip
     * const FieldTrip = await prisma.fieldTrip.create({
     *   data: {
     *     // ... data to create a FieldTrip
     *   }
     * })
     * 
     */
    create<T extends FieldTripCreateArgs>(args: SelectSubset<T, FieldTripCreateArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldTrips.
     * @param {FieldTripCreateManyArgs} args - Arguments to create many FieldTrips.
     * @example
     * // Create many FieldTrips
     * const fieldTrip = await prisma.fieldTrip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldTripCreateManyArgs>(args?: SelectSubset<T, FieldTripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FieldTrip.
     * @param {FieldTripDeleteArgs} args - Arguments to delete one FieldTrip.
     * @example
     * // Delete one FieldTrip
     * const FieldTrip = await prisma.fieldTrip.delete({
     *   where: {
     *     // ... filter to delete one FieldTrip
     *   }
     * })
     * 
     */
    delete<T extends FieldTripDeleteArgs>(args: SelectSubset<T, FieldTripDeleteArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldTrip.
     * @param {FieldTripUpdateArgs} args - Arguments to update one FieldTrip.
     * @example
     * // Update one FieldTrip
     * const fieldTrip = await prisma.fieldTrip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldTripUpdateArgs>(args: SelectSubset<T, FieldTripUpdateArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldTrips.
     * @param {FieldTripDeleteManyArgs} args - Arguments to filter FieldTrips to delete.
     * @example
     * // Delete a few FieldTrips
     * const { count } = await prisma.fieldTrip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldTripDeleteManyArgs>(args?: SelectSubset<T, FieldTripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldTrips
     * const fieldTrip = await prisma.fieldTrip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldTripUpdateManyArgs>(args: SelectSubset<T, FieldTripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FieldTrip.
     * @param {FieldTripUpsertArgs} args - Arguments to update or create a FieldTrip.
     * @example
     * // Update or create a FieldTrip
     * const fieldTrip = await prisma.fieldTrip.upsert({
     *   create: {
     *     // ... data to create a FieldTrip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldTrip we want to update
     *   }
     * })
     */
    upsert<T extends FieldTripUpsertArgs>(args: SelectSubset<T, FieldTripUpsertArgs<ExtArgs>>): Prisma__FieldTripClient<$Result.GetResult<Prisma.$FieldTripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripCountArgs} args - Arguments to filter FieldTrips to count.
     * @example
     * // Count the number of FieldTrips
     * const count = await prisma.fieldTrip.count({
     *   where: {
     *     // ... the filter for the FieldTrips we want to count
     *   }
     * })
    **/
    count<T extends FieldTripCountArgs>(
      args?: Subset<T, FieldTripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldTripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldTrip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldTripAggregateArgs>(args: Subset<T, FieldTripAggregateArgs>): Prisma.PrismaPromise<GetFieldTripAggregateType<T>>

    /**
     * Group by FieldTrip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldTripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldTripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldTripGroupByArgs['orderBy'] }
        : { orderBy?: FieldTripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldTripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldTrip model
   */
  readonly fields: FieldTripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldTrip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldTripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FieldTrip model
   */
  interface FieldTripFieldRefs {
    readonly fieldTripKey: FieldRef<"FieldTrip", 'String'>
    readonly employeeNumber: FieldRef<"FieldTrip", 'String'>
    readonly startDate: FieldRef<"FieldTrip", 'DateTime'>
    readonly endDate: FieldRef<"FieldTrip", 'DateTime'>
    readonly description: FieldRef<"FieldTrip", 'String'>
    readonly isActive: FieldRef<"FieldTrip", 'Boolean'>
    readonly createdBy: FieldRef<"FieldTrip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FieldTrip findUnique
   */
  export type FieldTripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * Filter, which FieldTrip to fetch.
     */
    where: FieldTripWhereUniqueInput
  }

  /**
   * FieldTrip findUniqueOrThrow
   */
  export type FieldTripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * Filter, which FieldTrip to fetch.
     */
    where: FieldTripWhereUniqueInput
  }

  /**
   * FieldTrip findFirst
   */
  export type FieldTripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * Filter, which FieldTrip to fetch.
     */
    where?: FieldTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldTrips to fetch.
     */
    orderBy?: FieldTripOrderByWithRelationInput | FieldTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldTrips.
     */
    cursor?: FieldTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldTrips.
     */
    distinct?: FieldTripScalarFieldEnum | FieldTripScalarFieldEnum[]
  }

  /**
   * FieldTrip findFirstOrThrow
   */
  export type FieldTripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * Filter, which FieldTrip to fetch.
     */
    where?: FieldTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldTrips to fetch.
     */
    orderBy?: FieldTripOrderByWithRelationInput | FieldTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldTrips.
     */
    cursor?: FieldTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldTrips.
     */
    distinct?: FieldTripScalarFieldEnum | FieldTripScalarFieldEnum[]
  }

  /**
   * FieldTrip findMany
   */
  export type FieldTripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * Filter, which FieldTrips to fetch.
     */
    where?: FieldTripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldTrips to fetch.
     */
    orderBy?: FieldTripOrderByWithRelationInput | FieldTripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldTrips.
     */
    cursor?: FieldTripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldTrips.
     */
    skip?: number
    distinct?: FieldTripScalarFieldEnum | FieldTripScalarFieldEnum[]
  }

  /**
   * FieldTrip create
   */
  export type FieldTripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldTrip.
     */
    data: XOR<FieldTripCreateInput, FieldTripUncheckedCreateInput>
  }

  /**
   * FieldTrip createMany
   */
  export type FieldTripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldTrips.
     */
    data: FieldTripCreateManyInput | FieldTripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FieldTrip update
   */
  export type FieldTripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldTrip.
     */
    data: XOR<FieldTripUpdateInput, FieldTripUncheckedUpdateInput>
    /**
     * Choose, which FieldTrip to update.
     */
    where: FieldTripWhereUniqueInput
  }

  /**
   * FieldTrip updateMany
   */
  export type FieldTripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldTrips.
     */
    data: XOR<FieldTripUpdateManyMutationInput, FieldTripUncheckedUpdateManyInput>
    /**
     * Filter which FieldTrips to update
     */
    where?: FieldTripWhereInput
    /**
     * Limit how many FieldTrips to update.
     */
    limit?: number
  }

  /**
   * FieldTrip upsert
   */
  export type FieldTripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldTrip to update in case it exists.
     */
    where: FieldTripWhereUniqueInput
    /**
     * In case the FieldTrip found by the `where` argument doesn't exist, create a new FieldTrip with this data.
     */
    create: XOR<FieldTripCreateInput, FieldTripUncheckedCreateInput>
    /**
     * In case the FieldTrip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldTripUpdateInput, FieldTripUncheckedUpdateInput>
  }

  /**
   * FieldTrip delete
   */
  export type FieldTripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
    /**
     * Filter which FieldTrip to delete.
     */
    where: FieldTripWhereUniqueInput
  }

  /**
   * FieldTrip deleteMany
   */
  export type FieldTripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldTrips to delete
     */
    where?: FieldTripWhereInput
    /**
     * Limit how many FieldTrips to delete.
     */
    limit?: number
  }

  /**
   * FieldTrip without action
   */
  export type FieldTripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldTrip
     */
    select?: FieldTripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldTrip
     */
    omit?: FieldTripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldTripInclude<ExtArgs> | null
  }


  /**
   * Model UserProjectRelation
   */

  export type AggregateUserProjectRelation = {
    _count: UserProjectRelationCountAggregateOutputType | null
    _min: UserProjectRelationMinAggregateOutputType | null
    _max: UserProjectRelationMaxAggregateOutputType | null
  }

  export type UserProjectRelationMinAggregateOutputType = {
    employeeNumber: string | null
    projectCode: string | null
  }

  export type UserProjectRelationMaxAggregateOutputType = {
    employeeNumber: string | null
    projectCode: string | null
  }

  export type UserProjectRelationCountAggregateOutputType = {
    employeeNumber: number
    projectCode: number
    _all: number
  }


  export type UserProjectRelationMinAggregateInputType = {
    employeeNumber?: true
    projectCode?: true
  }

  export type UserProjectRelationMaxAggregateInputType = {
    employeeNumber?: true
    projectCode?: true
  }

  export type UserProjectRelationCountAggregateInputType = {
    employeeNumber?: true
    projectCode?: true
    _all?: true
  }

  export type UserProjectRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProjectRelation to aggregate.
     */
    where?: UserProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProjectRelations to fetch.
     */
    orderBy?: UserProjectRelationOrderByWithRelationInput | UserProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProjectRelations
    **/
    _count?: true | UserProjectRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProjectRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProjectRelationMaxAggregateInputType
  }

  export type GetUserProjectRelationAggregateType<T extends UserProjectRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProjectRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProjectRelation[P]>
      : GetScalarType<T[P], AggregateUserProjectRelation[P]>
  }




  export type UserProjectRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProjectRelationWhereInput
    orderBy?: UserProjectRelationOrderByWithAggregationInput | UserProjectRelationOrderByWithAggregationInput[]
    by: UserProjectRelationScalarFieldEnum[] | UserProjectRelationScalarFieldEnum
    having?: UserProjectRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProjectRelationCountAggregateInputType | true
    _min?: UserProjectRelationMinAggregateInputType
    _max?: UserProjectRelationMaxAggregateInputType
  }

  export type UserProjectRelationGroupByOutputType = {
    employeeNumber: string
    projectCode: string
    _count: UserProjectRelationCountAggregateOutputType | null
    _min: UserProjectRelationMinAggregateOutputType | null
    _max: UserProjectRelationMaxAggregateOutputType | null
  }

  type GetUserProjectRelationGroupByPayload<T extends UserProjectRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProjectRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProjectRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProjectRelationGroupByOutputType[P]>
            : GetScalarType<T[P], UserProjectRelationGroupByOutputType[P]>
        }
      >
    >


  export type UserProjectRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeNumber?: boolean
    projectCode?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProjectRelation"]>



  export type UserProjectRelationSelectScalar = {
    employeeNumber?: boolean
    projectCode?: boolean
  }

  export type UserProjectRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeNumber" | "projectCode", ExtArgs["result"]["userProjectRelation"]>
  export type UserProjectRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UserProjectRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProjectRelation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeNumber: string
      projectCode: string
    }, ExtArgs["result"]["userProjectRelation"]>
    composites: {}
  }

  type UserProjectRelationGetPayload<S extends boolean | null | undefined | UserProjectRelationDefaultArgs> = $Result.GetResult<Prisma.$UserProjectRelationPayload, S>

  type UserProjectRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProjectRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProjectRelationCountAggregateInputType | true
    }

  export interface UserProjectRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProjectRelation'], meta: { name: 'UserProjectRelation' } }
    /**
     * Find zero or one UserProjectRelation that matches the filter.
     * @param {UserProjectRelationFindUniqueArgs} args - Arguments to find a UserProjectRelation
     * @example
     * // Get one UserProjectRelation
     * const userProjectRelation = await prisma.userProjectRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProjectRelationFindUniqueArgs>(args: SelectSubset<T, UserProjectRelationFindUniqueArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProjectRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProjectRelationFindUniqueOrThrowArgs} args - Arguments to find a UserProjectRelation
     * @example
     * // Get one UserProjectRelation
     * const userProjectRelation = await prisma.userProjectRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProjectRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProjectRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProjectRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationFindFirstArgs} args - Arguments to find a UserProjectRelation
     * @example
     * // Get one UserProjectRelation
     * const userProjectRelation = await prisma.userProjectRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProjectRelationFindFirstArgs>(args?: SelectSubset<T, UserProjectRelationFindFirstArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProjectRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationFindFirstOrThrowArgs} args - Arguments to find a UserProjectRelation
     * @example
     * // Get one UserProjectRelation
     * const userProjectRelation = await prisma.userProjectRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProjectRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProjectRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProjectRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProjectRelations
     * const userProjectRelations = await prisma.userProjectRelation.findMany()
     * 
     * // Get first 10 UserProjectRelations
     * const userProjectRelations = await prisma.userProjectRelation.findMany({ take: 10 })
     * 
     * // Only select the `employeeNumber`
     * const userProjectRelationWithEmployeeNumberOnly = await prisma.userProjectRelation.findMany({ select: { employeeNumber: true } })
     * 
     */
    findMany<T extends UserProjectRelationFindManyArgs>(args?: SelectSubset<T, UserProjectRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProjectRelation.
     * @param {UserProjectRelationCreateArgs} args - Arguments to create a UserProjectRelation.
     * @example
     * // Create one UserProjectRelation
     * const UserProjectRelation = await prisma.userProjectRelation.create({
     *   data: {
     *     // ... data to create a UserProjectRelation
     *   }
     * })
     * 
     */
    create<T extends UserProjectRelationCreateArgs>(args: SelectSubset<T, UserProjectRelationCreateArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProjectRelations.
     * @param {UserProjectRelationCreateManyArgs} args - Arguments to create many UserProjectRelations.
     * @example
     * // Create many UserProjectRelations
     * const userProjectRelation = await prisma.userProjectRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProjectRelationCreateManyArgs>(args?: SelectSubset<T, UserProjectRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProjectRelation.
     * @param {UserProjectRelationDeleteArgs} args - Arguments to delete one UserProjectRelation.
     * @example
     * // Delete one UserProjectRelation
     * const UserProjectRelation = await prisma.userProjectRelation.delete({
     *   where: {
     *     // ... filter to delete one UserProjectRelation
     *   }
     * })
     * 
     */
    delete<T extends UserProjectRelationDeleteArgs>(args: SelectSubset<T, UserProjectRelationDeleteArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProjectRelation.
     * @param {UserProjectRelationUpdateArgs} args - Arguments to update one UserProjectRelation.
     * @example
     * // Update one UserProjectRelation
     * const userProjectRelation = await prisma.userProjectRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProjectRelationUpdateArgs>(args: SelectSubset<T, UserProjectRelationUpdateArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProjectRelations.
     * @param {UserProjectRelationDeleteManyArgs} args - Arguments to filter UserProjectRelations to delete.
     * @example
     * // Delete a few UserProjectRelations
     * const { count } = await prisma.userProjectRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProjectRelationDeleteManyArgs>(args?: SelectSubset<T, UserProjectRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProjectRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProjectRelations
     * const userProjectRelation = await prisma.userProjectRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProjectRelationUpdateManyArgs>(args: SelectSubset<T, UserProjectRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProjectRelation.
     * @param {UserProjectRelationUpsertArgs} args - Arguments to update or create a UserProjectRelation.
     * @example
     * // Update or create a UserProjectRelation
     * const userProjectRelation = await prisma.userProjectRelation.upsert({
     *   create: {
     *     // ... data to create a UserProjectRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProjectRelation we want to update
     *   }
     * })
     */
    upsert<T extends UserProjectRelationUpsertArgs>(args: SelectSubset<T, UserProjectRelationUpsertArgs<ExtArgs>>): Prisma__UserProjectRelationClient<$Result.GetResult<Prisma.$UserProjectRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProjectRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationCountArgs} args - Arguments to filter UserProjectRelations to count.
     * @example
     * // Count the number of UserProjectRelations
     * const count = await prisma.userProjectRelation.count({
     *   where: {
     *     // ... the filter for the UserProjectRelations we want to count
     *   }
     * })
    **/
    count<T extends UserProjectRelationCountArgs>(
      args?: Subset<T, UserProjectRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProjectRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProjectRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProjectRelationAggregateArgs>(args: Subset<T, UserProjectRelationAggregateArgs>): Prisma.PrismaPromise<GetUserProjectRelationAggregateType<T>>

    /**
     * Group by UserProjectRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProjectRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProjectRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProjectRelationGroupByArgs['orderBy'] }
        : { orderBy?: UserProjectRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProjectRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProjectRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProjectRelation model
   */
  readonly fields: UserProjectRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProjectRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProjectRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProjectRelation model
   */
  interface UserProjectRelationFieldRefs {
    readonly employeeNumber: FieldRef<"UserProjectRelation", 'String'>
    readonly projectCode: FieldRef<"UserProjectRelation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProjectRelation findUnique
   */
  export type UserProjectRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which UserProjectRelation to fetch.
     */
    where: UserProjectRelationWhereUniqueInput
  }

  /**
   * UserProjectRelation findUniqueOrThrow
   */
  export type UserProjectRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which UserProjectRelation to fetch.
     */
    where: UserProjectRelationWhereUniqueInput
  }

  /**
   * UserProjectRelation findFirst
   */
  export type UserProjectRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which UserProjectRelation to fetch.
     */
    where?: UserProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProjectRelations to fetch.
     */
    orderBy?: UserProjectRelationOrderByWithRelationInput | UserProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProjectRelations.
     */
    cursor?: UserProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProjectRelations.
     */
    distinct?: UserProjectRelationScalarFieldEnum | UserProjectRelationScalarFieldEnum[]
  }

  /**
   * UserProjectRelation findFirstOrThrow
   */
  export type UserProjectRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which UserProjectRelation to fetch.
     */
    where?: UserProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProjectRelations to fetch.
     */
    orderBy?: UserProjectRelationOrderByWithRelationInput | UserProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProjectRelations.
     */
    cursor?: UserProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProjectRelations.
     */
    distinct?: UserProjectRelationScalarFieldEnum | UserProjectRelationScalarFieldEnum[]
  }

  /**
   * UserProjectRelation findMany
   */
  export type UserProjectRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which UserProjectRelations to fetch.
     */
    where?: UserProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProjectRelations to fetch.
     */
    orderBy?: UserProjectRelationOrderByWithRelationInput | UserProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProjectRelations.
     */
    cursor?: UserProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProjectRelations.
     */
    skip?: number
    distinct?: UserProjectRelationScalarFieldEnum | UserProjectRelationScalarFieldEnum[]
  }

  /**
   * UserProjectRelation create
   */
  export type UserProjectRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProjectRelation.
     */
    data: XOR<UserProjectRelationCreateInput, UserProjectRelationUncheckedCreateInput>
  }

  /**
   * UserProjectRelation createMany
   */
  export type UserProjectRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProjectRelations.
     */
    data: UserProjectRelationCreateManyInput | UserProjectRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProjectRelation update
   */
  export type UserProjectRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProjectRelation.
     */
    data: XOR<UserProjectRelationUpdateInput, UserProjectRelationUncheckedUpdateInput>
    /**
     * Choose, which UserProjectRelation to update.
     */
    where: UserProjectRelationWhereUniqueInput
  }

  /**
   * UserProjectRelation updateMany
   */
  export type UserProjectRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProjectRelations.
     */
    data: XOR<UserProjectRelationUpdateManyMutationInput, UserProjectRelationUncheckedUpdateManyInput>
    /**
     * Filter which UserProjectRelations to update
     */
    where?: UserProjectRelationWhereInput
    /**
     * Limit how many UserProjectRelations to update.
     */
    limit?: number
  }

  /**
   * UserProjectRelation upsert
   */
  export type UserProjectRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProjectRelation to update in case it exists.
     */
    where: UserProjectRelationWhereUniqueInput
    /**
     * In case the UserProjectRelation found by the `where` argument doesn't exist, create a new UserProjectRelation with this data.
     */
    create: XOR<UserProjectRelationCreateInput, UserProjectRelationUncheckedCreateInput>
    /**
     * In case the UserProjectRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProjectRelationUpdateInput, UserProjectRelationUncheckedUpdateInput>
  }

  /**
   * UserProjectRelation delete
   */
  export type UserProjectRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
    /**
     * Filter which UserProjectRelation to delete.
     */
    where: UserProjectRelationWhereUniqueInput
  }

  /**
   * UserProjectRelation deleteMany
   */
  export type UserProjectRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProjectRelations to delete
     */
    where?: UserProjectRelationWhereInput
    /**
     * Limit how many UserProjectRelations to delete.
     */
    limit?: number
  }

  /**
   * UserProjectRelation without action
   */
  export type UserProjectRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProjectRelation
     */
    select?: UserProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProjectRelation
     */
    omit?: UserProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProjectRelationInclude<ExtArgs> | null
  }


  /**
   * Model PI
   */

  export type AggregatePI = {
    _count: PICountAggregateOutputType | null
    _min: PIMinAggregateOutputType | null
    _max: PIMaxAggregateOutputType | null
  }

  export type PIMinAggregateOutputType = {
    username: string | null
  }

  export type PIMaxAggregateOutputType = {
    username: string | null
  }

  export type PICountAggregateOutputType = {
    username: number
    _all: number
  }


  export type PIMinAggregateInputType = {
    username?: true
  }

  export type PIMaxAggregateInputType = {
    username?: true
  }

  export type PICountAggregateInputType = {
    username?: true
    _all?: true
  }

  export type PIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PI to aggregate.
     */
    where?: PIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIS to fetch.
     */
    orderBy?: PIOrderByWithRelationInput | PIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PIS
    **/
    _count?: true | PICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PIMaxAggregateInputType
  }

  export type GetPIAggregateType<T extends PIAggregateArgs> = {
        [P in keyof T & keyof AggregatePI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePI[P]>
      : GetScalarType<T[P], AggregatePI[P]>
  }




  export type PIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PIWhereInput
    orderBy?: PIOrderByWithAggregationInput | PIOrderByWithAggregationInput[]
    by: PIScalarFieldEnum[] | PIScalarFieldEnum
    having?: PIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PICountAggregateInputType | true
    _min?: PIMinAggregateInputType
    _max?: PIMaxAggregateInputType
  }

  export type PIGroupByOutputType = {
    username: string
    _count: PICountAggregateOutputType | null
    _min: PIMinAggregateOutputType | null
    _max: PIMaxAggregateOutputType | null
  }

  type GetPIGroupByPayload<T extends PIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PIGroupByOutputType[P]>
            : GetScalarType<T[P], PIGroupByOutputType[P]>
        }
      >
    >


  export type PISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    piProjects?: boolean | PI$piProjectsArgs<ExtArgs>
    _count?: boolean | PICountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pI"]>



  export type PISelectScalar = {
    username?: boolean
  }

  export type PIOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username", ExtArgs["result"]["pI"]>
  export type PIInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piProjects?: boolean | PI$piProjectsArgs<ExtArgs>
    _count?: boolean | PICountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PI"
    objects: {
      piProjects: Prisma.$PIProjectRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
    }, ExtArgs["result"]["pI"]>
    composites: {}
  }

  type PIGetPayload<S extends boolean | null | undefined | PIDefaultArgs> = $Result.GetResult<Prisma.$PIPayload, S>

  type PICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PICountAggregateInputType | true
    }

  export interface PIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PI'], meta: { name: 'PI' } }
    /**
     * Find zero or one PI that matches the filter.
     * @param {PIFindUniqueArgs} args - Arguments to find a PI
     * @example
     * // Get one PI
     * const pI = await prisma.pI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PIFindUniqueArgs>(args: SelectSubset<T, PIFindUniqueArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PI that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PIFindUniqueOrThrowArgs} args - Arguments to find a PI
     * @example
     * // Get one PI
     * const pI = await prisma.pI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PIFindUniqueOrThrowArgs>(args: SelectSubset<T, PIFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIFindFirstArgs} args - Arguments to find a PI
     * @example
     * // Get one PI
     * const pI = await prisma.pI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PIFindFirstArgs>(args?: SelectSubset<T, PIFindFirstArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIFindFirstOrThrowArgs} args - Arguments to find a PI
     * @example
     * // Get one PI
     * const pI = await prisma.pI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PIFindFirstOrThrowArgs>(args?: SelectSubset<T, PIFindFirstOrThrowArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PIS
     * const pIS = await prisma.pI.findMany()
     * 
     * // Get first 10 PIS
     * const pIS = await prisma.pI.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const pIWithUsernameOnly = await prisma.pI.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends PIFindManyArgs>(args?: SelectSubset<T, PIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PI.
     * @param {PICreateArgs} args - Arguments to create a PI.
     * @example
     * // Create one PI
     * const PI = await prisma.pI.create({
     *   data: {
     *     // ... data to create a PI
     *   }
     * })
     * 
     */
    create<T extends PICreateArgs>(args: SelectSubset<T, PICreateArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PIS.
     * @param {PICreateManyArgs} args - Arguments to create many PIS.
     * @example
     * // Create many PIS
     * const pI = await prisma.pI.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PICreateManyArgs>(args?: SelectSubset<T, PICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PI.
     * @param {PIDeleteArgs} args - Arguments to delete one PI.
     * @example
     * // Delete one PI
     * const PI = await prisma.pI.delete({
     *   where: {
     *     // ... filter to delete one PI
     *   }
     * })
     * 
     */
    delete<T extends PIDeleteArgs>(args: SelectSubset<T, PIDeleteArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PI.
     * @param {PIUpdateArgs} args - Arguments to update one PI.
     * @example
     * // Update one PI
     * const pI = await prisma.pI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PIUpdateArgs>(args: SelectSubset<T, PIUpdateArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PIS.
     * @param {PIDeleteManyArgs} args - Arguments to filter PIS to delete.
     * @example
     * // Delete a few PIS
     * const { count } = await prisma.pI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PIDeleteManyArgs>(args?: SelectSubset<T, PIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PIS
     * const pI = await prisma.pI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PIUpdateManyArgs>(args: SelectSubset<T, PIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PI.
     * @param {PIUpsertArgs} args - Arguments to update or create a PI.
     * @example
     * // Update or create a PI
     * const pI = await prisma.pI.upsert({
     *   create: {
     *     // ... data to create a PI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PI we want to update
     *   }
     * })
     */
    upsert<T extends PIUpsertArgs>(args: SelectSubset<T, PIUpsertArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PICountArgs} args - Arguments to filter PIS to count.
     * @example
     * // Count the number of PIS
     * const count = await prisma.pI.count({
     *   where: {
     *     // ... the filter for the PIS we want to count
     *   }
     * })
    **/
    count<T extends PICountArgs>(
      args?: Subset<T, PICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PIAggregateArgs>(args: Subset<T, PIAggregateArgs>): Prisma.PrismaPromise<GetPIAggregateType<T>>

    /**
     * Group by PI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PIGroupByArgs['orderBy'] }
        : { orderBy?: PIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PI model
   */
  readonly fields: PIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    piProjects<T extends PI$piProjectsArgs<ExtArgs> = {}>(args?: Subset<T, PI$piProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PI model
   */
  interface PIFieldRefs {
    readonly username: FieldRef<"PI", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PI findUnique
   */
  export type PIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * Filter, which PI to fetch.
     */
    where: PIWhereUniqueInput
  }

  /**
   * PI findUniqueOrThrow
   */
  export type PIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * Filter, which PI to fetch.
     */
    where: PIWhereUniqueInput
  }

  /**
   * PI findFirst
   */
  export type PIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * Filter, which PI to fetch.
     */
    where?: PIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIS to fetch.
     */
    orderBy?: PIOrderByWithRelationInput | PIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PIS.
     */
    cursor?: PIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PIS.
     */
    distinct?: PIScalarFieldEnum | PIScalarFieldEnum[]
  }

  /**
   * PI findFirstOrThrow
   */
  export type PIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * Filter, which PI to fetch.
     */
    where?: PIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIS to fetch.
     */
    orderBy?: PIOrderByWithRelationInput | PIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PIS.
     */
    cursor?: PIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PIS.
     */
    distinct?: PIScalarFieldEnum | PIScalarFieldEnum[]
  }

  /**
   * PI findMany
   */
  export type PIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * Filter, which PIS to fetch.
     */
    where?: PIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIS to fetch.
     */
    orderBy?: PIOrderByWithRelationInput | PIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PIS.
     */
    cursor?: PIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIS.
     */
    skip?: number
    distinct?: PIScalarFieldEnum | PIScalarFieldEnum[]
  }

  /**
   * PI create
   */
  export type PICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * The data needed to create a PI.
     */
    data: XOR<PICreateInput, PIUncheckedCreateInput>
  }

  /**
   * PI createMany
   */
  export type PICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PIS.
     */
    data: PICreateManyInput | PICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PI update
   */
  export type PIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * The data needed to update a PI.
     */
    data: XOR<PIUpdateInput, PIUncheckedUpdateInput>
    /**
     * Choose, which PI to update.
     */
    where: PIWhereUniqueInput
  }

  /**
   * PI updateMany
   */
  export type PIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PIS.
     */
    data: XOR<PIUpdateManyMutationInput, PIUncheckedUpdateManyInput>
    /**
     * Filter which PIS to update
     */
    where?: PIWhereInput
    /**
     * Limit how many PIS to update.
     */
    limit?: number
  }

  /**
   * PI upsert
   */
  export type PIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * The filter to search for the PI to update in case it exists.
     */
    where: PIWhereUniqueInput
    /**
     * In case the PI found by the `where` argument doesn't exist, create a new PI with this data.
     */
    create: XOR<PICreateInput, PIUncheckedCreateInput>
    /**
     * In case the PI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PIUpdateInput, PIUncheckedUpdateInput>
  }

  /**
   * PI delete
   */
  export type PIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
    /**
     * Filter which PI to delete.
     */
    where: PIWhereUniqueInput
  }

  /**
   * PI deleteMany
   */
  export type PIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PIS to delete
     */
    where?: PIWhereInput
    /**
     * Limit how many PIS to delete.
     */
    limit?: number
  }

  /**
   * PI.piProjects
   */
  export type PI$piProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    where?: PIProjectRelationWhereInput
    orderBy?: PIProjectRelationOrderByWithRelationInput | PIProjectRelationOrderByWithRelationInput[]
    cursor?: PIProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PIProjectRelationScalarFieldEnum | PIProjectRelationScalarFieldEnum[]
  }

  /**
   * PI without action
   */
  export type PIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PI
     */
    select?: PISelect<ExtArgs> | null
    /**
     * Omit specific fields from the PI
     */
    omit?: PIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIInclude<ExtArgs> | null
  }


  /**
   * Model PIProjectRelation
   */

  export type AggregatePIProjectRelation = {
    _count: PIProjectRelationCountAggregateOutputType | null
    _min: PIProjectRelationMinAggregateOutputType | null
    _max: PIProjectRelationMaxAggregateOutputType | null
  }

  export type PIProjectRelationMinAggregateOutputType = {
    username: string | null
    projectCode: string | null
  }

  export type PIProjectRelationMaxAggregateOutputType = {
    username: string | null
    projectCode: string | null
  }

  export type PIProjectRelationCountAggregateOutputType = {
    username: number
    projectCode: number
    _all: number
  }


  export type PIProjectRelationMinAggregateInputType = {
    username?: true
    projectCode?: true
  }

  export type PIProjectRelationMaxAggregateInputType = {
    username?: true
    projectCode?: true
  }

  export type PIProjectRelationCountAggregateInputType = {
    username?: true
    projectCode?: true
    _all?: true
  }

  export type PIProjectRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PIProjectRelation to aggregate.
     */
    where?: PIProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIProjectRelations to fetch.
     */
    orderBy?: PIProjectRelationOrderByWithRelationInput | PIProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PIProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PIProjectRelations
    **/
    _count?: true | PIProjectRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PIProjectRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PIProjectRelationMaxAggregateInputType
  }

  export type GetPIProjectRelationAggregateType<T extends PIProjectRelationAggregateArgs> = {
        [P in keyof T & keyof AggregatePIProjectRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePIProjectRelation[P]>
      : GetScalarType<T[P], AggregatePIProjectRelation[P]>
  }




  export type PIProjectRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PIProjectRelationWhereInput
    orderBy?: PIProjectRelationOrderByWithAggregationInput | PIProjectRelationOrderByWithAggregationInput[]
    by: PIProjectRelationScalarFieldEnum[] | PIProjectRelationScalarFieldEnum
    having?: PIProjectRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PIProjectRelationCountAggregateInputType | true
    _min?: PIProjectRelationMinAggregateInputType
    _max?: PIProjectRelationMaxAggregateInputType
  }

  export type PIProjectRelationGroupByOutputType = {
    username: string
    projectCode: string
    _count: PIProjectRelationCountAggregateOutputType | null
    _min: PIProjectRelationMinAggregateOutputType | null
    _max: PIProjectRelationMaxAggregateOutputType | null
  }

  type GetPIProjectRelationGroupByPayload<T extends PIProjectRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PIProjectRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PIProjectRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PIProjectRelationGroupByOutputType[P]>
            : GetScalarType<T[P], PIProjectRelationGroupByOutputType[P]>
        }
      >
    >


  export type PIProjectRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    projectCode?: boolean
    pi?: boolean | PIDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pIProjectRelation"]>



  export type PIProjectRelationSelectScalar = {
    username?: boolean
    projectCode?: boolean
  }

  export type PIProjectRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "projectCode", ExtArgs["result"]["pIProjectRelation"]>
  export type PIProjectRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pi?: boolean | PIDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PIProjectRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PIProjectRelation"
    objects: {
      pi: Prisma.$PIPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      projectCode: string
    }, ExtArgs["result"]["pIProjectRelation"]>
    composites: {}
  }

  type PIProjectRelationGetPayload<S extends boolean | null | undefined | PIProjectRelationDefaultArgs> = $Result.GetResult<Prisma.$PIProjectRelationPayload, S>

  type PIProjectRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PIProjectRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PIProjectRelationCountAggregateInputType | true
    }

  export interface PIProjectRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PIProjectRelation'], meta: { name: 'PIProjectRelation' } }
    /**
     * Find zero or one PIProjectRelation that matches the filter.
     * @param {PIProjectRelationFindUniqueArgs} args - Arguments to find a PIProjectRelation
     * @example
     * // Get one PIProjectRelation
     * const pIProjectRelation = await prisma.pIProjectRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PIProjectRelationFindUniqueArgs>(args: SelectSubset<T, PIProjectRelationFindUniqueArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PIProjectRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PIProjectRelationFindUniqueOrThrowArgs} args - Arguments to find a PIProjectRelation
     * @example
     * // Get one PIProjectRelation
     * const pIProjectRelation = await prisma.pIProjectRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PIProjectRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, PIProjectRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PIProjectRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationFindFirstArgs} args - Arguments to find a PIProjectRelation
     * @example
     * // Get one PIProjectRelation
     * const pIProjectRelation = await prisma.pIProjectRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PIProjectRelationFindFirstArgs>(args?: SelectSubset<T, PIProjectRelationFindFirstArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PIProjectRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationFindFirstOrThrowArgs} args - Arguments to find a PIProjectRelation
     * @example
     * // Get one PIProjectRelation
     * const pIProjectRelation = await prisma.pIProjectRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PIProjectRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, PIProjectRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PIProjectRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PIProjectRelations
     * const pIProjectRelations = await prisma.pIProjectRelation.findMany()
     * 
     * // Get first 10 PIProjectRelations
     * const pIProjectRelations = await prisma.pIProjectRelation.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const pIProjectRelationWithUsernameOnly = await prisma.pIProjectRelation.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends PIProjectRelationFindManyArgs>(args?: SelectSubset<T, PIProjectRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PIProjectRelation.
     * @param {PIProjectRelationCreateArgs} args - Arguments to create a PIProjectRelation.
     * @example
     * // Create one PIProjectRelation
     * const PIProjectRelation = await prisma.pIProjectRelation.create({
     *   data: {
     *     // ... data to create a PIProjectRelation
     *   }
     * })
     * 
     */
    create<T extends PIProjectRelationCreateArgs>(args: SelectSubset<T, PIProjectRelationCreateArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PIProjectRelations.
     * @param {PIProjectRelationCreateManyArgs} args - Arguments to create many PIProjectRelations.
     * @example
     * // Create many PIProjectRelations
     * const pIProjectRelation = await prisma.pIProjectRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PIProjectRelationCreateManyArgs>(args?: SelectSubset<T, PIProjectRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PIProjectRelation.
     * @param {PIProjectRelationDeleteArgs} args - Arguments to delete one PIProjectRelation.
     * @example
     * // Delete one PIProjectRelation
     * const PIProjectRelation = await prisma.pIProjectRelation.delete({
     *   where: {
     *     // ... filter to delete one PIProjectRelation
     *   }
     * })
     * 
     */
    delete<T extends PIProjectRelationDeleteArgs>(args: SelectSubset<T, PIProjectRelationDeleteArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PIProjectRelation.
     * @param {PIProjectRelationUpdateArgs} args - Arguments to update one PIProjectRelation.
     * @example
     * // Update one PIProjectRelation
     * const pIProjectRelation = await prisma.pIProjectRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PIProjectRelationUpdateArgs>(args: SelectSubset<T, PIProjectRelationUpdateArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PIProjectRelations.
     * @param {PIProjectRelationDeleteManyArgs} args - Arguments to filter PIProjectRelations to delete.
     * @example
     * // Delete a few PIProjectRelations
     * const { count } = await prisma.pIProjectRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PIProjectRelationDeleteManyArgs>(args?: SelectSubset<T, PIProjectRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PIProjectRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PIProjectRelations
     * const pIProjectRelation = await prisma.pIProjectRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PIProjectRelationUpdateManyArgs>(args: SelectSubset<T, PIProjectRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PIProjectRelation.
     * @param {PIProjectRelationUpsertArgs} args - Arguments to update or create a PIProjectRelation.
     * @example
     * // Update or create a PIProjectRelation
     * const pIProjectRelation = await prisma.pIProjectRelation.upsert({
     *   create: {
     *     // ... data to create a PIProjectRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PIProjectRelation we want to update
     *   }
     * })
     */
    upsert<T extends PIProjectRelationUpsertArgs>(args: SelectSubset<T, PIProjectRelationUpsertArgs<ExtArgs>>): Prisma__PIProjectRelationClient<$Result.GetResult<Prisma.$PIProjectRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PIProjectRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationCountArgs} args - Arguments to filter PIProjectRelations to count.
     * @example
     * // Count the number of PIProjectRelations
     * const count = await prisma.pIProjectRelation.count({
     *   where: {
     *     // ... the filter for the PIProjectRelations we want to count
     *   }
     * })
    **/
    count<T extends PIProjectRelationCountArgs>(
      args?: Subset<T, PIProjectRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PIProjectRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PIProjectRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PIProjectRelationAggregateArgs>(args: Subset<T, PIProjectRelationAggregateArgs>): Prisma.PrismaPromise<GetPIProjectRelationAggregateType<T>>

    /**
     * Group by PIProjectRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PIProjectRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PIProjectRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PIProjectRelationGroupByArgs['orderBy'] }
        : { orderBy?: PIProjectRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PIProjectRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPIProjectRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PIProjectRelation model
   */
  readonly fields: PIProjectRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PIProjectRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PIProjectRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pi<T extends PIDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PIDefaultArgs<ExtArgs>>): Prisma__PIClient<$Result.GetResult<Prisma.$PIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PIProjectRelation model
   */
  interface PIProjectRelationFieldRefs {
    readonly username: FieldRef<"PIProjectRelation", 'String'>
    readonly projectCode: FieldRef<"PIProjectRelation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PIProjectRelation findUnique
   */
  export type PIProjectRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which PIProjectRelation to fetch.
     */
    where: PIProjectRelationWhereUniqueInput
  }

  /**
   * PIProjectRelation findUniqueOrThrow
   */
  export type PIProjectRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which PIProjectRelation to fetch.
     */
    where: PIProjectRelationWhereUniqueInput
  }

  /**
   * PIProjectRelation findFirst
   */
  export type PIProjectRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which PIProjectRelation to fetch.
     */
    where?: PIProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIProjectRelations to fetch.
     */
    orderBy?: PIProjectRelationOrderByWithRelationInput | PIProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PIProjectRelations.
     */
    cursor?: PIProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PIProjectRelations.
     */
    distinct?: PIProjectRelationScalarFieldEnum | PIProjectRelationScalarFieldEnum[]
  }

  /**
   * PIProjectRelation findFirstOrThrow
   */
  export type PIProjectRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which PIProjectRelation to fetch.
     */
    where?: PIProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIProjectRelations to fetch.
     */
    orderBy?: PIProjectRelationOrderByWithRelationInput | PIProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PIProjectRelations.
     */
    cursor?: PIProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PIProjectRelations.
     */
    distinct?: PIProjectRelationScalarFieldEnum | PIProjectRelationScalarFieldEnum[]
  }

  /**
   * PIProjectRelation findMany
   */
  export type PIProjectRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which PIProjectRelations to fetch.
     */
    where?: PIProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PIProjectRelations to fetch.
     */
    orderBy?: PIProjectRelationOrderByWithRelationInput | PIProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PIProjectRelations.
     */
    cursor?: PIProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PIProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PIProjectRelations.
     */
    skip?: number
    distinct?: PIProjectRelationScalarFieldEnum | PIProjectRelationScalarFieldEnum[]
  }

  /**
   * PIProjectRelation create
   */
  export type PIProjectRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a PIProjectRelation.
     */
    data: XOR<PIProjectRelationCreateInput, PIProjectRelationUncheckedCreateInput>
  }

  /**
   * PIProjectRelation createMany
   */
  export type PIProjectRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PIProjectRelations.
     */
    data: PIProjectRelationCreateManyInput | PIProjectRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PIProjectRelation update
   */
  export type PIProjectRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a PIProjectRelation.
     */
    data: XOR<PIProjectRelationUpdateInput, PIProjectRelationUncheckedUpdateInput>
    /**
     * Choose, which PIProjectRelation to update.
     */
    where: PIProjectRelationWhereUniqueInput
  }

  /**
   * PIProjectRelation updateMany
   */
  export type PIProjectRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PIProjectRelations.
     */
    data: XOR<PIProjectRelationUpdateManyMutationInput, PIProjectRelationUncheckedUpdateManyInput>
    /**
     * Filter which PIProjectRelations to update
     */
    where?: PIProjectRelationWhereInput
    /**
     * Limit how many PIProjectRelations to update.
     */
    limit?: number
  }

  /**
   * PIProjectRelation upsert
   */
  export type PIProjectRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the PIProjectRelation to update in case it exists.
     */
    where: PIProjectRelationWhereUniqueInput
    /**
     * In case the PIProjectRelation found by the `where` argument doesn't exist, create a new PIProjectRelation with this data.
     */
    create: XOR<PIProjectRelationCreateInput, PIProjectRelationUncheckedCreateInput>
    /**
     * In case the PIProjectRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PIProjectRelationUpdateInput, PIProjectRelationUncheckedUpdateInput>
  }

  /**
   * PIProjectRelation delete
   */
  export type PIProjectRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
    /**
     * Filter which PIProjectRelation to delete.
     */
    where: PIProjectRelationWhereUniqueInput
  }

  /**
   * PIProjectRelation deleteMany
   */
  export type PIProjectRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PIProjectRelations to delete
     */
    where?: PIProjectRelationWhereInput
    /**
     * Limit how many PIProjectRelations to delete.
     */
    limit?: number
  }

  /**
   * PIProjectRelation without action
   */
  export type PIProjectRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PIProjectRelation
     */
    select?: PIProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PIProjectRelation
     */
    omit?: PIProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PIProjectRelationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    employeeNumber: 'employeeNumber',
    username: 'username',
    empClass: 'empClass'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    projectCode: 'projectCode',
    department: 'department'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    employeeNumber: 'employeeNumber',
    date: 'date',
    checkinTime: 'checkinTime',
    checkoutTime: 'checkoutTime',
    sessionType: 'sessionType',
    attendanceType: 'attendanceType',
    locationType: 'locationType',
    takenLocation: 'takenLocation',
    photoUrl: 'photoUrl',
    audioUrl: 'audioUrl',
    audioDuration: 'audioDuration',
    latitude: 'latitude',
    longitude: 'longitude',
    locationAddress: 'locationAddress',
    county: 'county',
    state: 'state',
    postcode: 'postcode'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const CalendarScalarFieldEnum: {
    date: 'date',
    isHoliday: 'isHoliday',
    isWeekend: 'isWeekend',
    description: 'description'
  };

  export type CalendarScalarFieldEnum = (typeof CalendarScalarFieldEnum)[keyof typeof CalendarScalarFieldEnum]


  export const FieldTripScalarFieldEnum: {
    fieldTripKey: 'fieldTripKey',
    employeeNumber: 'employeeNumber',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    isActive: 'isActive',
    createdBy: 'createdBy'
  };

  export type FieldTripScalarFieldEnum = (typeof FieldTripScalarFieldEnum)[keyof typeof FieldTripScalarFieldEnum]


  export const UserProjectRelationScalarFieldEnum: {
    employeeNumber: 'employeeNumber',
    projectCode: 'projectCode'
  };

  export type UserProjectRelationScalarFieldEnum = (typeof UserProjectRelationScalarFieldEnum)[keyof typeof UserProjectRelationScalarFieldEnum]


  export const PIScalarFieldEnum: {
    username: 'username'
  };

  export type PIScalarFieldEnum = (typeof PIScalarFieldEnum)[keyof typeof PIScalarFieldEnum]


  export const PIProjectRelationScalarFieldEnum: {
    username: 'username',
    projectCode: 'projectCode'
  };

  export type PIProjectRelationScalarFieldEnum = (typeof PIProjectRelationScalarFieldEnum)[keyof typeof PIProjectRelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    employeeNumber: 'employeeNumber',
    username: 'username',
    empClass: 'empClass'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    projectCode: 'projectCode',
    department: 'department'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AttendanceOrderByRelevanceFieldEnum: {
    employeeNumber: 'employeeNumber',
    takenLocation: 'takenLocation',
    photoUrl: 'photoUrl',
    audioUrl: 'audioUrl',
    locationAddress: 'locationAddress',
    county: 'county',
    state: 'state',
    postcode: 'postcode'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  export const CalendarOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type CalendarOrderByRelevanceFieldEnum = (typeof CalendarOrderByRelevanceFieldEnum)[keyof typeof CalendarOrderByRelevanceFieldEnum]


  export const FieldTripOrderByRelevanceFieldEnum: {
    fieldTripKey: 'fieldTripKey',
    employeeNumber: 'employeeNumber',
    description: 'description',
    createdBy: 'createdBy'
  };

  export type FieldTripOrderByRelevanceFieldEnum = (typeof FieldTripOrderByRelevanceFieldEnum)[keyof typeof FieldTripOrderByRelevanceFieldEnum]


  export const UserProjectRelationOrderByRelevanceFieldEnum: {
    employeeNumber: 'employeeNumber',
    projectCode: 'projectCode'
  };

  export type UserProjectRelationOrderByRelevanceFieldEnum = (typeof UserProjectRelationOrderByRelevanceFieldEnum)[keyof typeof UserProjectRelationOrderByRelevanceFieldEnum]


  export const PIOrderByRelevanceFieldEnum: {
    username: 'username'
  };

  export type PIOrderByRelevanceFieldEnum = (typeof PIOrderByRelevanceFieldEnum)[keyof typeof PIOrderByRelevanceFieldEnum]


  export const PIProjectRelationOrderByRelevanceFieldEnum: {
    username: 'username',
    projectCode: 'projectCode'
  };

  export type PIProjectRelationOrderByRelevanceFieldEnum = (typeof PIProjectRelationOrderByRelevanceFieldEnum)[keyof typeof PIProjectRelationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AttendanceSession'
   */
  export type EnumAttendanceSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceSession'>
    


  /**
   * Reference to a field of type 'AttendanceType'
   */
  export type EnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType'>
    


  /**
   * Reference to a field of type 'LocationType'
   */
  export type EnumLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    employeeNumber?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    empClass?: StringFilter<"User"> | string
    attendances?: AttendanceListRelationFilter
    fieldTrips?: FieldTripListRelationFilter
    userProjects?: UserProjectRelationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    employeeNumber?: SortOrder
    username?: SortOrder
    empClass?: SortOrder
    attendances?: AttendanceOrderByRelationAggregateInput
    fieldTrips?: FieldTripOrderByRelationAggregateInput
    userProjects?: UserProjectRelationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    employeeNumber?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    empClass?: StringFilter<"User"> | string
    attendances?: AttendanceListRelationFilter
    fieldTrips?: FieldTripListRelationFilter
    userProjects?: UserProjectRelationListRelationFilter
  }, "employeeNumber" | "username">

  export type UserOrderByWithAggregationInput = {
    employeeNumber?: SortOrder
    username?: SortOrder
    empClass?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    employeeNumber?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    empClass?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    projectCode?: StringFilter<"Project"> | string
    department?: StringFilter<"Project"> | string
    userProjects?: UserProjectRelationListRelationFilter
    piRelations?: PIProjectRelationListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    projectCode?: SortOrder
    department?: SortOrder
    userProjects?: UserProjectRelationOrderByRelationAggregateInput
    piRelations?: PIProjectRelationOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    projectCode?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    department?: StringFilter<"Project"> | string
    userProjects?: UserProjectRelationListRelationFilter
    piRelations?: PIProjectRelationListRelationFilter
  }, "projectCode">

  export type ProjectOrderByWithAggregationInput = {
    projectCode?: SortOrder
    department?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    projectCode?: StringWithAggregatesFilter<"Project"> | string
    department?: StringWithAggregatesFilter<"Project"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    employeeNumber?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkinTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkoutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    sessionType?: EnumAttendanceSessionNullableFilter<"Attendance"> | $Enums.AttendanceSession | null
    attendanceType?: EnumAttendanceTypeNullableFilter<"Attendance"> | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFilter<"Attendance"> | $Enums.LocationType
    takenLocation?: StringNullableFilter<"Attendance"> | string | null
    photoUrl?: StringNullableFilter<"Attendance"> | string | null
    audioUrl?: StringNullableFilter<"Attendance"> | string | null
    audioDuration?: IntNullableFilter<"Attendance"> | number | null
    latitude?: FloatNullableFilter<"Attendance"> | number | null
    longitude?: FloatNullableFilter<"Attendance"> | number | null
    locationAddress?: StringNullableFilter<"Attendance"> | string | null
    county?: StringNullableFilter<"Attendance"> | string | null
    state?: StringNullableFilter<"Attendance"> | string | null
    postcode?: StringNullableFilter<"Attendance"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    employeeNumber?: SortOrder
    date?: SortOrder
    checkinTime?: SortOrderInput | SortOrder
    checkoutTime?: SortOrderInput | SortOrder
    sessionType?: SortOrderInput | SortOrder
    attendanceType?: SortOrderInput | SortOrder
    locationType?: SortOrder
    takenLocation?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    audioDuration?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AttendanceOrderByRelevanceInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    employeeNumber_date?: AttendanceEmployeeNumberDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    employeeNumber?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkinTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkoutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    sessionType?: EnumAttendanceSessionNullableFilter<"Attendance"> | $Enums.AttendanceSession | null
    attendanceType?: EnumAttendanceTypeNullableFilter<"Attendance"> | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFilter<"Attendance"> | $Enums.LocationType
    takenLocation?: StringNullableFilter<"Attendance"> | string | null
    photoUrl?: StringNullableFilter<"Attendance"> | string | null
    audioUrl?: StringNullableFilter<"Attendance"> | string | null
    audioDuration?: IntNullableFilter<"Attendance"> | number | null
    latitude?: FloatNullableFilter<"Attendance"> | number | null
    longitude?: FloatNullableFilter<"Attendance"> | number | null
    locationAddress?: StringNullableFilter<"Attendance"> | string | null
    county?: StringNullableFilter<"Attendance"> | string | null
    state?: StringNullableFilter<"Attendance"> | string | null
    postcode?: StringNullableFilter<"Attendance"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "employeeNumber_date">

  export type AttendanceOrderByWithAggregationInput = {
    employeeNumber?: SortOrder
    date?: SortOrder
    checkinTime?: SortOrderInput | SortOrder
    checkoutTime?: SortOrderInput | SortOrder
    sessionType?: SortOrderInput | SortOrder
    attendanceType?: SortOrderInput | SortOrder
    locationType?: SortOrder
    takenLocation?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    audioDuration?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    employeeNumber?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    checkinTime?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    checkoutTime?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    sessionType?: EnumAttendanceSessionNullableWithAggregatesFilter<"Attendance"> | $Enums.AttendanceSession | null
    attendanceType?: EnumAttendanceTypeNullableWithAggregatesFilter<"Attendance"> | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeWithAggregatesFilter<"Attendance"> | $Enums.LocationType
    takenLocation?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    audioDuration?: IntNullableWithAggregatesFilter<"Attendance"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    locationAddress?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    county?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    state?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    postcode?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
  }

  export type CalendarWhereInput = {
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    date?: DateTimeFilter<"Calendar"> | Date | string
    isHoliday?: BoolFilter<"Calendar"> | boolean
    isWeekend?: BoolFilter<"Calendar"> | boolean
    description?: StringNullableFilter<"Calendar"> | string | null
  }

  export type CalendarOrderByWithRelationInput = {
    date?: SortOrder
    isHoliday?: SortOrder
    isWeekend?: SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: CalendarOrderByRelevanceInput
  }

  export type CalendarWhereUniqueInput = Prisma.AtLeast<{
    date?: Date | string
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    isHoliday?: BoolFilter<"Calendar"> | boolean
    isWeekend?: BoolFilter<"Calendar"> | boolean
    description?: StringNullableFilter<"Calendar"> | string | null
  }, "date">

  export type CalendarOrderByWithAggregationInput = {
    date?: SortOrder
    isHoliday?: SortOrder
    isWeekend?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CalendarCountOrderByAggregateInput
    _max?: CalendarMaxOrderByAggregateInput
    _min?: CalendarMinOrderByAggregateInput
  }

  export type CalendarScalarWhereWithAggregatesInput = {
    AND?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    OR?: CalendarScalarWhereWithAggregatesInput[]
    NOT?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    date?: DateTimeWithAggregatesFilter<"Calendar"> | Date | string
    isHoliday?: BoolWithAggregatesFilter<"Calendar"> | boolean
    isWeekend?: BoolWithAggregatesFilter<"Calendar"> | boolean
    description?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
  }

  export type FieldTripWhereInput = {
    AND?: FieldTripWhereInput | FieldTripWhereInput[]
    OR?: FieldTripWhereInput[]
    NOT?: FieldTripWhereInput | FieldTripWhereInput[]
    fieldTripKey?: StringFilter<"FieldTrip"> | string
    employeeNumber?: StringFilter<"FieldTrip"> | string
    startDate?: DateTimeFilter<"FieldTrip"> | Date | string
    endDate?: DateTimeFilter<"FieldTrip"> | Date | string
    description?: StringNullableFilter<"FieldTrip"> | string | null
    isActive?: BoolFilter<"FieldTrip"> | boolean
    createdBy?: StringFilter<"FieldTrip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FieldTripOrderByWithRelationInput = {
    fieldTripKey?: SortOrder
    employeeNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: FieldTripOrderByRelevanceInput
  }

  export type FieldTripWhereUniqueInput = Prisma.AtLeast<{
    fieldTripKey?: string
    AND?: FieldTripWhereInput | FieldTripWhereInput[]
    OR?: FieldTripWhereInput[]
    NOT?: FieldTripWhereInput | FieldTripWhereInput[]
    employeeNumber?: StringFilter<"FieldTrip"> | string
    startDate?: DateTimeFilter<"FieldTrip"> | Date | string
    endDate?: DateTimeFilter<"FieldTrip"> | Date | string
    description?: StringNullableFilter<"FieldTrip"> | string | null
    isActive?: BoolFilter<"FieldTrip"> | boolean
    createdBy?: StringFilter<"FieldTrip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "fieldTripKey">

  export type FieldTripOrderByWithAggregationInput = {
    fieldTripKey?: SortOrder
    employeeNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    _count?: FieldTripCountOrderByAggregateInput
    _max?: FieldTripMaxOrderByAggregateInput
    _min?: FieldTripMinOrderByAggregateInput
  }

  export type FieldTripScalarWhereWithAggregatesInput = {
    AND?: FieldTripScalarWhereWithAggregatesInput | FieldTripScalarWhereWithAggregatesInput[]
    OR?: FieldTripScalarWhereWithAggregatesInput[]
    NOT?: FieldTripScalarWhereWithAggregatesInput | FieldTripScalarWhereWithAggregatesInput[]
    fieldTripKey?: StringWithAggregatesFilter<"FieldTrip"> | string
    employeeNumber?: StringWithAggregatesFilter<"FieldTrip"> | string
    startDate?: DateTimeWithAggregatesFilter<"FieldTrip"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"FieldTrip"> | Date | string
    description?: StringNullableWithAggregatesFilter<"FieldTrip"> | string | null
    isActive?: BoolWithAggregatesFilter<"FieldTrip"> | boolean
    createdBy?: StringWithAggregatesFilter<"FieldTrip"> | string
  }

  export type UserProjectRelationWhereInput = {
    AND?: UserProjectRelationWhereInput | UserProjectRelationWhereInput[]
    OR?: UserProjectRelationWhereInput[]
    NOT?: UserProjectRelationWhereInput | UserProjectRelationWhereInput[]
    employeeNumber?: StringFilter<"UserProjectRelation"> | string
    projectCode?: StringFilter<"UserProjectRelation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UserProjectRelationOrderByWithRelationInput = {
    employeeNumber?: SortOrder
    projectCode?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    _relevance?: UserProjectRelationOrderByRelevanceInput
  }

  export type UserProjectRelationWhereUniqueInput = Prisma.AtLeast<{
    employeeNumber_projectCode?: UserProjectRelationEmployeeNumberProjectCodeCompoundUniqueInput
    AND?: UserProjectRelationWhereInput | UserProjectRelationWhereInput[]
    OR?: UserProjectRelationWhereInput[]
    NOT?: UserProjectRelationWhereInput | UserProjectRelationWhereInput[]
    employeeNumber?: StringFilter<"UserProjectRelation"> | string
    projectCode?: StringFilter<"UserProjectRelation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "employeeNumber_projectCode">

  export type UserProjectRelationOrderByWithAggregationInput = {
    employeeNumber?: SortOrder
    projectCode?: SortOrder
    _count?: UserProjectRelationCountOrderByAggregateInput
    _max?: UserProjectRelationMaxOrderByAggregateInput
    _min?: UserProjectRelationMinOrderByAggregateInput
  }

  export type UserProjectRelationScalarWhereWithAggregatesInput = {
    AND?: UserProjectRelationScalarWhereWithAggregatesInput | UserProjectRelationScalarWhereWithAggregatesInput[]
    OR?: UserProjectRelationScalarWhereWithAggregatesInput[]
    NOT?: UserProjectRelationScalarWhereWithAggregatesInput | UserProjectRelationScalarWhereWithAggregatesInput[]
    employeeNumber?: StringWithAggregatesFilter<"UserProjectRelation"> | string
    projectCode?: StringWithAggregatesFilter<"UserProjectRelation"> | string
  }

  export type PIWhereInput = {
    AND?: PIWhereInput | PIWhereInput[]
    OR?: PIWhereInput[]
    NOT?: PIWhereInput | PIWhereInput[]
    username?: StringFilter<"PI"> | string
    piProjects?: PIProjectRelationListRelationFilter
  }

  export type PIOrderByWithRelationInput = {
    username?: SortOrder
    piProjects?: PIProjectRelationOrderByRelationAggregateInput
    _relevance?: PIOrderByRelevanceInput
  }

  export type PIWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    AND?: PIWhereInput | PIWhereInput[]
    OR?: PIWhereInput[]
    NOT?: PIWhereInput | PIWhereInput[]
    piProjects?: PIProjectRelationListRelationFilter
  }, "username">

  export type PIOrderByWithAggregationInput = {
    username?: SortOrder
    _count?: PICountOrderByAggregateInput
    _max?: PIMaxOrderByAggregateInput
    _min?: PIMinOrderByAggregateInput
  }

  export type PIScalarWhereWithAggregatesInput = {
    AND?: PIScalarWhereWithAggregatesInput | PIScalarWhereWithAggregatesInput[]
    OR?: PIScalarWhereWithAggregatesInput[]
    NOT?: PIScalarWhereWithAggregatesInput | PIScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"PI"> | string
  }

  export type PIProjectRelationWhereInput = {
    AND?: PIProjectRelationWhereInput | PIProjectRelationWhereInput[]
    OR?: PIProjectRelationWhereInput[]
    NOT?: PIProjectRelationWhereInput | PIProjectRelationWhereInput[]
    username?: StringFilter<"PIProjectRelation"> | string
    projectCode?: StringFilter<"PIProjectRelation"> | string
    pi?: XOR<PIScalarRelationFilter, PIWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PIProjectRelationOrderByWithRelationInput = {
    username?: SortOrder
    projectCode?: SortOrder
    pi?: PIOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    _relevance?: PIProjectRelationOrderByRelevanceInput
  }

  export type PIProjectRelationWhereUniqueInput = Prisma.AtLeast<{
    username_projectCode?: PIProjectRelationUsernameProjectCodeCompoundUniqueInput
    AND?: PIProjectRelationWhereInput | PIProjectRelationWhereInput[]
    OR?: PIProjectRelationWhereInput[]
    NOT?: PIProjectRelationWhereInput | PIProjectRelationWhereInput[]
    username?: StringFilter<"PIProjectRelation"> | string
    projectCode?: StringFilter<"PIProjectRelation"> | string
    pi?: XOR<PIScalarRelationFilter, PIWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "username_projectCode">

  export type PIProjectRelationOrderByWithAggregationInput = {
    username?: SortOrder
    projectCode?: SortOrder
    _count?: PIProjectRelationCountOrderByAggregateInput
    _max?: PIProjectRelationMaxOrderByAggregateInput
    _min?: PIProjectRelationMinOrderByAggregateInput
  }

  export type PIProjectRelationScalarWhereWithAggregatesInput = {
    AND?: PIProjectRelationScalarWhereWithAggregatesInput | PIProjectRelationScalarWhereWithAggregatesInput[]
    OR?: PIProjectRelationScalarWhereWithAggregatesInput[]
    NOT?: PIProjectRelationScalarWhereWithAggregatesInput | PIProjectRelationScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"PIProjectRelation"> | string
    projectCode?: StringWithAggregatesFilter<"PIProjectRelation"> | string
  }

  export type UserCreateInput = {
    employeeNumber: string
    username: string
    empClass?: string
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    fieldTrips?: FieldTripCreateNestedManyWithoutUserInput
    userProjects?: UserProjectRelationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    employeeNumber: string
    username: string
    empClass?: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    fieldTrips?: FieldTripUncheckedCreateNestedManyWithoutUserInput
    userProjects?: UserProjectRelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    fieldTrips?: FieldTripUpdateManyWithoutUserNestedInput
    userProjects?: UserProjectRelationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    fieldTrips?: FieldTripUncheckedUpdateManyWithoutUserNestedInput
    userProjects?: UserProjectRelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    employeeNumber: string
    username: string
    empClass?: string
  }

  export type UserUpdateManyMutationInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    projectCode: string
    department: string
    userProjects?: UserProjectRelationCreateNestedManyWithoutProjectInput
    piRelations?: PIProjectRelationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    projectCode: string
    department: string
    userProjects?: UserProjectRelationUncheckedCreateNestedManyWithoutProjectInput
    piRelations?: PIProjectRelationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userProjects?: UserProjectRelationUpdateManyWithoutProjectNestedInput
    piRelations?: PIProjectRelationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userProjects?: UserProjectRelationUncheckedUpdateManyWithoutProjectNestedInput
    piRelations?: PIProjectRelationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    projectCode: string
    department: string
  }

  export type ProjectUpdateManyMutationInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    date: Date | string
    checkinTime?: Date | string | null
    checkoutTime?: Date | string | null
    sessionType?: $Enums.AttendanceSession | null
    attendanceType?: $Enums.AttendanceType | null
    locationType?: $Enums.LocationType
    takenLocation?: string | null
    photoUrl?: string | null
    audioUrl?: string | null
    audioDuration?: number | null
    latitude?: number | null
    longitude?: number | null
    locationAddress?: string | null
    county?: string | null
    state?: string | null
    postcode?: string | null
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    employeeNumber: string
    date: Date | string
    checkinTime?: Date | string | null
    checkoutTime?: Date | string | null
    sessionType?: $Enums.AttendanceSession | null
    attendanceType?: $Enums.AttendanceType | null
    locationType?: $Enums.LocationType
    takenLocation?: string | null
    photoUrl?: string | null
    audioUrl?: string | null
    audioDuration?: number | null
    latitude?: number | null
    longitude?: number | null
    locationAddress?: string | null
    county?: string | null
    state?: string | null
    postcode?: string | null
  }

  export type AttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyInput = {
    employeeNumber: string
    date: Date | string
    checkinTime?: Date | string | null
    checkoutTime?: Date | string | null
    sessionType?: $Enums.AttendanceSession | null
    attendanceType?: $Enums.AttendanceType | null
    locationType?: $Enums.LocationType
    takenLocation?: string | null
    photoUrl?: string | null
    audioUrl?: string | null
    audioDuration?: number | null
    latitude?: number | null
    longitude?: number | null
    locationAddress?: string | null
    county?: string | null
    state?: string | null
    postcode?: string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalendarCreateInput = {
    date: Date | string
    isHoliday?: boolean
    isWeekend?: boolean
    description?: string | null
  }

  export type CalendarUncheckedCreateInput = {
    date: Date | string
    isHoliday?: boolean
    isWeekend?: boolean
    description?: string | null
  }

  export type CalendarUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    isWeekend?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalendarUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    isWeekend?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalendarCreateManyInput = {
    date: Date | string
    isHoliday?: boolean
    isWeekend?: boolean
    description?: string | null
  }

  export type CalendarUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    isWeekend?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalendarUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isHoliday?: BoolFieldUpdateOperationsInput | boolean
    isWeekend?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FieldTripCreateInput = {
    fieldTripKey?: string
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    isActive?: boolean
    createdBy: string
    user: UserCreateNestedOneWithoutFieldTripsInput
  }

  export type FieldTripUncheckedCreateInput = {
    fieldTripKey?: string
    employeeNumber: string
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    isActive?: boolean
    createdBy: string
  }

  export type FieldTripUpdateInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFieldTripsNestedInput
  }

  export type FieldTripUncheckedUpdateInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type FieldTripCreateManyInput = {
    fieldTripKey?: string
    employeeNumber: string
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    isActive?: boolean
    createdBy: string
  }

  export type FieldTripUpdateManyMutationInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type FieldTripUncheckedUpdateManyInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    employeeNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserProjectRelationCreateInput = {
    user: UserCreateNestedOneWithoutUserProjectsInput
    project: ProjectCreateNestedOneWithoutUserProjectsInput
  }

  export type UserProjectRelationUncheckedCreateInput = {
    employeeNumber: string
    projectCode: string
  }

  export type UserProjectRelationUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserProjectsNestedInput
    project?: ProjectUpdateOneRequiredWithoutUserProjectsNestedInput
  }

  export type UserProjectRelationUncheckedUpdateInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserProjectRelationCreateManyInput = {
    employeeNumber: string
    projectCode: string
  }

  export type UserProjectRelationUpdateManyMutationInput = {

  }

  export type UserProjectRelationUncheckedUpdateManyInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type PICreateInput = {
    username: string
    piProjects?: PIProjectRelationCreateNestedManyWithoutPiInput
  }

  export type PIUncheckedCreateInput = {
    username: string
    piProjects?: PIProjectRelationUncheckedCreateNestedManyWithoutPiInput
  }

  export type PIUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    piProjects?: PIProjectRelationUpdateManyWithoutPiNestedInput
  }

  export type PIUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    piProjects?: PIProjectRelationUncheckedUpdateManyWithoutPiNestedInput
  }

  export type PICreateManyInput = {
    username: string
  }

  export type PIUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type PIUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type PIProjectRelationCreateInput = {
    pi: PICreateNestedOneWithoutPiProjectsInput
    project: ProjectCreateNestedOneWithoutPiRelationsInput
  }

  export type PIProjectRelationUncheckedCreateInput = {
    username: string
    projectCode: string
  }

  export type PIProjectRelationUpdateInput = {
    pi?: PIUpdateOneRequiredWithoutPiProjectsNestedInput
    project?: ProjectUpdateOneRequiredWithoutPiRelationsNestedInput
  }

  export type PIProjectRelationUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type PIProjectRelationCreateManyInput = {
    username: string
    projectCode: string
  }

  export type PIProjectRelationUpdateManyMutationInput = {

  }

  export type PIProjectRelationUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type FieldTripListRelationFilter = {
    every?: FieldTripWhereInput
    some?: FieldTripWhereInput
    none?: FieldTripWhereInput
  }

  export type UserProjectRelationListRelationFilter = {
    every?: UserProjectRelationWhereInput
    some?: UserProjectRelationWhereInput
    none?: UserProjectRelationWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldTripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProjectRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    employeeNumber?: SortOrder
    username?: SortOrder
    empClass?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    employeeNumber?: SortOrder
    username?: SortOrder
    empClass?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    employeeNumber?: SortOrder
    username?: SortOrder
    empClass?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PIProjectRelationListRelationFilter = {
    every?: PIProjectRelationWhereInput
    some?: PIProjectRelationWhereInput
    none?: PIProjectRelationWhereInput
  }

  export type PIProjectRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    projectCode?: SortOrder
    department?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    projectCode?: SortOrder
    department?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    projectCode?: SortOrder
    department?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAttendanceSessionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceSession | EnumAttendanceSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceSession[] | null
    notIn?: $Enums.AttendanceSession[] | null
    not?: NestedEnumAttendanceSessionNullableFilter<$PrismaModel> | $Enums.AttendanceSession | null
  }

  export type EnumAttendanceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceType[] | null
    notIn?: $Enums.AttendanceType[] | null
    not?: NestedEnumAttendanceTypeNullableFilter<$PrismaModel> | $Enums.AttendanceType | null
  }

  export type EnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[]
    notIn?: $Enums.LocationType[]
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceOrderByRelevanceInput = {
    fields: AttendanceOrderByRelevanceFieldEnum | AttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceEmployeeNumberDateCompoundUniqueInput = {
    employeeNumber: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    employeeNumber?: SortOrder
    date?: SortOrder
    checkinTime?: SortOrder
    checkoutTime?: SortOrder
    sessionType?: SortOrder
    attendanceType?: SortOrder
    locationType?: SortOrder
    takenLocation?: SortOrder
    photoUrl?: SortOrder
    audioUrl?: SortOrder
    audioDuration?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationAddress?: SortOrder
    county?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    audioDuration?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    employeeNumber?: SortOrder
    date?: SortOrder
    checkinTime?: SortOrder
    checkoutTime?: SortOrder
    sessionType?: SortOrder
    attendanceType?: SortOrder
    locationType?: SortOrder
    takenLocation?: SortOrder
    photoUrl?: SortOrder
    audioUrl?: SortOrder
    audioDuration?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationAddress?: SortOrder
    county?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    employeeNumber?: SortOrder
    date?: SortOrder
    checkinTime?: SortOrder
    checkoutTime?: SortOrder
    sessionType?: SortOrder
    attendanceType?: SortOrder
    locationType?: SortOrder
    takenLocation?: SortOrder
    photoUrl?: SortOrder
    audioUrl?: SortOrder
    audioDuration?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    locationAddress?: SortOrder
    county?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    audioDuration?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAttendanceSessionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceSession | EnumAttendanceSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceSession[] | null
    notIn?: $Enums.AttendanceSession[] | null
    not?: NestedEnumAttendanceSessionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceSession | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttendanceSessionNullableFilter<$PrismaModel>
    _max?: NestedEnumAttendanceSessionNullableFilter<$PrismaModel>
  }

  export type EnumAttendanceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceType[] | null
    notIn?: $Enums.AttendanceType[] | null
    not?: NestedEnumAttendanceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeNullableFilter<$PrismaModel>
  }

  export type EnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[]
    notIn?: $Enums.LocationType[]
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CalendarOrderByRelevanceInput = {
    fields: CalendarOrderByRelevanceFieldEnum | CalendarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CalendarCountOrderByAggregateInput = {
    date?: SortOrder
    isHoliday?: SortOrder
    isWeekend?: SortOrder
    description?: SortOrder
  }

  export type CalendarMaxOrderByAggregateInput = {
    date?: SortOrder
    isHoliday?: SortOrder
    isWeekend?: SortOrder
    description?: SortOrder
  }

  export type CalendarMinOrderByAggregateInput = {
    date?: SortOrder
    isHoliday?: SortOrder
    isWeekend?: SortOrder
    description?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FieldTripOrderByRelevanceInput = {
    fields: FieldTripOrderByRelevanceFieldEnum | FieldTripOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FieldTripCountOrderByAggregateInput = {
    fieldTripKey?: SortOrder
    employeeNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
  }

  export type FieldTripMaxOrderByAggregateInput = {
    fieldTripKey?: SortOrder
    employeeNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
  }

  export type FieldTripMinOrderByAggregateInput = {
    fieldTripKey?: SortOrder
    employeeNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserProjectRelationOrderByRelevanceInput = {
    fields: UserProjectRelationOrderByRelevanceFieldEnum | UserProjectRelationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserProjectRelationEmployeeNumberProjectCodeCompoundUniqueInput = {
    employeeNumber: string
    projectCode: string
  }

  export type UserProjectRelationCountOrderByAggregateInput = {
    employeeNumber?: SortOrder
    projectCode?: SortOrder
  }

  export type UserProjectRelationMaxOrderByAggregateInput = {
    employeeNumber?: SortOrder
    projectCode?: SortOrder
  }

  export type UserProjectRelationMinOrderByAggregateInput = {
    employeeNumber?: SortOrder
    projectCode?: SortOrder
  }

  export type PIOrderByRelevanceInput = {
    fields: PIOrderByRelevanceFieldEnum | PIOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PICountOrderByAggregateInput = {
    username?: SortOrder
  }

  export type PIMaxOrderByAggregateInput = {
    username?: SortOrder
  }

  export type PIMinOrderByAggregateInput = {
    username?: SortOrder
  }

  export type PIScalarRelationFilter = {
    is?: PIWhereInput
    isNot?: PIWhereInput
  }

  export type PIProjectRelationOrderByRelevanceInput = {
    fields: PIProjectRelationOrderByRelevanceFieldEnum | PIProjectRelationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PIProjectRelationUsernameProjectCodeCompoundUniqueInput = {
    username: string
    projectCode: string
  }

  export type PIProjectRelationCountOrderByAggregateInput = {
    username?: SortOrder
    projectCode?: SortOrder
  }

  export type PIProjectRelationMaxOrderByAggregateInput = {
    username?: SortOrder
    projectCode?: SortOrder
  }

  export type PIProjectRelationMinOrderByAggregateInput = {
    username?: SortOrder
    projectCode?: SortOrder
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FieldTripCreateNestedManyWithoutUserInput = {
    create?: XOR<FieldTripCreateWithoutUserInput, FieldTripUncheckedCreateWithoutUserInput> | FieldTripCreateWithoutUserInput[] | FieldTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FieldTripCreateOrConnectWithoutUserInput | FieldTripCreateOrConnectWithoutUserInput[]
    createMany?: FieldTripCreateManyUserInputEnvelope
    connect?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
  }

  export type UserProjectRelationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProjectRelationCreateWithoutUserInput, UserProjectRelationUncheckedCreateWithoutUserInput> | UserProjectRelationCreateWithoutUserInput[] | UserProjectRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutUserInput | UserProjectRelationCreateOrConnectWithoutUserInput[]
    createMany?: UserProjectRelationCreateManyUserInputEnvelope
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FieldTripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FieldTripCreateWithoutUserInput, FieldTripUncheckedCreateWithoutUserInput> | FieldTripCreateWithoutUserInput[] | FieldTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FieldTripCreateOrConnectWithoutUserInput | FieldTripCreateOrConnectWithoutUserInput[]
    createMany?: FieldTripCreateManyUserInputEnvelope
    connect?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
  }

  export type UserProjectRelationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProjectRelationCreateWithoutUserInput, UserProjectRelationUncheckedCreateWithoutUserInput> | UserProjectRelationCreateWithoutUserInput[] | UserProjectRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutUserInput | UserProjectRelationCreateOrConnectWithoutUserInput[]
    createMany?: UserProjectRelationCreateManyUserInputEnvelope
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FieldTripUpdateManyWithoutUserNestedInput = {
    create?: XOR<FieldTripCreateWithoutUserInput, FieldTripUncheckedCreateWithoutUserInput> | FieldTripCreateWithoutUserInput[] | FieldTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FieldTripCreateOrConnectWithoutUserInput | FieldTripCreateOrConnectWithoutUserInput[]
    upsert?: FieldTripUpsertWithWhereUniqueWithoutUserInput | FieldTripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FieldTripCreateManyUserInputEnvelope
    set?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    disconnect?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    delete?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    connect?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    update?: FieldTripUpdateWithWhereUniqueWithoutUserInput | FieldTripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FieldTripUpdateManyWithWhereWithoutUserInput | FieldTripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FieldTripScalarWhereInput | FieldTripScalarWhereInput[]
  }

  export type UserProjectRelationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProjectRelationCreateWithoutUserInput, UserProjectRelationUncheckedCreateWithoutUserInput> | UserProjectRelationCreateWithoutUserInput[] | UserProjectRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutUserInput | UserProjectRelationCreateOrConnectWithoutUserInput[]
    upsert?: UserProjectRelationUpsertWithWhereUniqueWithoutUserInput | UserProjectRelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProjectRelationCreateManyUserInputEnvelope
    set?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    disconnect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    delete?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    update?: UserProjectRelationUpdateWithWhereUniqueWithoutUserInput | UserProjectRelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProjectRelationUpdateManyWithWhereWithoutUserInput | UserProjectRelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProjectRelationScalarWhereInput | UserProjectRelationScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FieldTripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FieldTripCreateWithoutUserInput, FieldTripUncheckedCreateWithoutUserInput> | FieldTripCreateWithoutUserInput[] | FieldTripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FieldTripCreateOrConnectWithoutUserInput | FieldTripCreateOrConnectWithoutUserInput[]
    upsert?: FieldTripUpsertWithWhereUniqueWithoutUserInput | FieldTripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FieldTripCreateManyUserInputEnvelope
    set?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    disconnect?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    delete?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    connect?: FieldTripWhereUniqueInput | FieldTripWhereUniqueInput[]
    update?: FieldTripUpdateWithWhereUniqueWithoutUserInput | FieldTripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FieldTripUpdateManyWithWhereWithoutUserInput | FieldTripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FieldTripScalarWhereInput | FieldTripScalarWhereInput[]
  }

  export type UserProjectRelationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProjectRelationCreateWithoutUserInput, UserProjectRelationUncheckedCreateWithoutUserInput> | UserProjectRelationCreateWithoutUserInput[] | UserProjectRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutUserInput | UserProjectRelationCreateOrConnectWithoutUserInput[]
    upsert?: UserProjectRelationUpsertWithWhereUniqueWithoutUserInput | UserProjectRelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProjectRelationCreateManyUserInputEnvelope
    set?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    disconnect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    delete?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    update?: UserProjectRelationUpdateWithWhereUniqueWithoutUserInput | UserProjectRelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProjectRelationUpdateManyWithWhereWithoutUserInput | UserProjectRelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProjectRelationScalarWhereInput | UserProjectRelationScalarWhereInput[]
  }

  export type UserProjectRelationCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserProjectRelationCreateWithoutProjectInput, UserProjectRelationUncheckedCreateWithoutProjectInput> | UserProjectRelationCreateWithoutProjectInput[] | UserProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutProjectInput | UserProjectRelationCreateOrConnectWithoutProjectInput[]
    createMany?: UserProjectRelationCreateManyProjectInputEnvelope
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
  }

  export type PIProjectRelationCreateNestedManyWithoutProjectInput = {
    create?: XOR<PIProjectRelationCreateWithoutProjectInput, PIProjectRelationUncheckedCreateWithoutProjectInput> | PIProjectRelationCreateWithoutProjectInput[] | PIProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutProjectInput | PIProjectRelationCreateOrConnectWithoutProjectInput[]
    createMany?: PIProjectRelationCreateManyProjectInputEnvelope
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
  }

  export type UserProjectRelationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserProjectRelationCreateWithoutProjectInput, UserProjectRelationUncheckedCreateWithoutProjectInput> | UserProjectRelationCreateWithoutProjectInput[] | UserProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutProjectInput | UserProjectRelationCreateOrConnectWithoutProjectInput[]
    createMany?: UserProjectRelationCreateManyProjectInputEnvelope
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
  }

  export type PIProjectRelationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PIProjectRelationCreateWithoutProjectInput, PIProjectRelationUncheckedCreateWithoutProjectInput> | PIProjectRelationCreateWithoutProjectInput[] | PIProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutProjectInput | PIProjectRelationCreateOrConnectWithoutProjectInput[]
    createMany?: PIProjectRelationCreateManyProjectInputEnvelope
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
  }

  export type UserProjectRelationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserProjectRelationCreateWithoutProjectInput, UserProjectRelationUncheckedCreateWithoutProjectInput> | UserProjectRelationCreateWithoutProjectInput[] | UserProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutProjectInput | UserProjectRelationCreateOrConnectWithoutProjectInput[]
    upsert?: UserProjectRelationUpsertWithWhereUniqueWithoutProjectInput | UserProjectRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserProjectRelationCreateManyProjectInputEnvelope
    set?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    disconnect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    delete?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    update?: UserProjectRelationUpdateWithWhereUniqueWithoutProjectInput | UserProjectRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserProjectRelationUpdateManyWithWhereWithoutProjectInput | UserProjectRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserProjectRelationScalarWhereInput | UserProjectRelationScalarWhereInput[]
  }

  export type PIProjectRelationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PIProjectRelationCreateWithoutProjectInput, PIProjectRelationUncheckedCreateWithoutProjectInput> | PIProjectRelationCreateWithoutProjectInput[] | PIProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutProjectInput | PIProjectRelationCreateOrConnectWithoutProjectInput[]
    upsert?: PIProjectRelationUpsertWithWhereUniqueWithoutProjectInput | PIProjectRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PIProjectRelationCreateManyProjectInputEnvelope
    set?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    disconnect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    delete?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    update?: PIProjectRelationUpdateWithWhereUniqueWithoutProjectInput | PIProjectRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PIProjectRelationUpdateManyWithWhereWithoutProjectInput | PIProjectRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PIProjectRelationScalarWhereInput | PIProjectRelationScalarWhereInput[]
  }

  export type UserProjectRelationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserProjectRelationCreateWithoutProjectInput, UserProjectRelationUncheckedCreateWithoutProjectInput> | UserProjectRelationCreateWithoutProjectInput[] | UserProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserProjectRelationCreateOrConnectWithoutProjectInput | UserProjectRelationCreateOrConnectWithoutProjectInput[]
    upsert?: UserProjectRelationUpsertWithWhereUniqueWithoutProjectInput | UserProjectRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserProjectRelationCreateManyProjectInputEnvelope
    set?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    disconnect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    delete?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    connect?: UserProjectRelationWhereUniqueInput | UserProjectRelationWhereUniqueInput[]
    update?: UserProjectRelationUpdateWithWhereUniqueWithoutProjectInput | UserProjectRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserProjectRelationUpdateManyWithWhereWithoutProjectInput | UserProjectRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserProjectRelationScalarWhereInput | UserProjectRelationScalarWhereInput[]
  }

  export type PIProjectRelationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PIProjectRelationCreateWithoutProjectInput, PIProjectRelationUncheckedCreateWithoutProjectInput> | PIProjectRelationCreateWithoutProjectInput[] | PIProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutProjectInput | PIProjectRelationCreateOrConnectWithoutProjectInput[]
    upsert?: PIProjectRelationUpsertWithWhereUniqueWithoutProjectInput | PIProjectRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PIProjectRelationCreateManyProjectInputEnvelope
    set?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    disconnect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    delete?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    update?: PIProjectRelationUpdateWithWhereUniqueWithoutProjectInput | PIProjectRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PIProjectRelationUpdateManyWithWhereWithoutProjectInput | PIProjectRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PIProjectRelationScalarWhereInput | PIProjectRelationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumAttendanceSessionFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceSession | null
  }

  export type NullableEnumAttendanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceType | null
  }

  export type EnumLocationTypeFieldUpdateOperationsInput = {
    set?: $Enums.LocationType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserCreateNestedOneWithoutFieldTripsInput = {
    create?: XOR<UserCreateWithoutFieldTripsInput, UserUncheckedCreateWithoutFieldTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFieldTripsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFieldTripsNestedInput = {
    create?: XOR<UserCreateWithoutFieldTripsInput, UserUncheckedCreateWithoutFieldTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFieldTripsInput
    upsert?: UserUpsertWithoutFieldTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFieldTripsInput, UserUpdateWithoutFieldTripsInput>, UserUncheckedUpdateWithoutFieldTripsInput>
  }

  export type UserCreateNestedOneWithoutUserProjectsInput = {
    create?: XOR<UserCreateWithoutUserProjectsInput, UserUncheckedCreateWithoutUserProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutUserProjectsInput = {
    create?: XOR<ProjectCreateWithoutUserProjectsInput, ProjectUncheckedCreateWithoutUserProjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserProjectsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserProjectsNestedInput = {
    create?: XOR<UserCreateWithoutUserProjectsInput, UserUncheckedCreateWithoutUserProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProjectsInput
    upsert?: UserUpsertWithoutUserProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProjectsInput, UserUpdateWithoutUserProjectsInput>, UserUncheckedUpdateWithoutUserProjectsInput>
  }

  export type ProjectUpdateOneRequiredWithoutUserProjectsNestedInput = {
    create?: XOR<ProjectCreateWithoutUserProjectsInput, ProjectUncheckedCreateWithoutUserProjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserProjectsInput
    upsert?: ProjectUpsertWithoutUserProjectsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUserProjectsInput, ProjectUpdateWithoutUserProjectsInput>, ProjectUncheckedUpdateWithoutUserProjectsInput>
  }

  export type PIProjectRelationCreateNestedManyWithoutPiInput = {
    create?: XOR<PIProjectRelationCreateWithoutPiInput, PIProjectRelationUncheckedCreateWithoutPiInput> | PIProjectRelationCreateWithoutPiInput[] | PIProjectRelationUncheckedCreateWithoutPiInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutPiInput | PIProjectRelationCreateOrConnectWithoutPiInput[]
    createMany?: PIProjectRelationCreateManyPiInputEnvelope
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
  }

  export type PIProjectRelationUncheckedCreateNestedManyWithoutPiInput = {
    create?: XOR<PIProjectRelationCreateWithoutPiInput, PIProjectRelationUncheckedCreateWithoutPiInput> | PIProjectRelationCreateWithoutPiInput[] | PIProjectRelationUncheckedCreateWithoutPiInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutPiInput | PIProjectRelationCreateOrConnectWithoutPiInput[]
    createMany?: PIProjectRelationCreateManyPiInputEnvelope
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
  }

  export type PIProjectRelationUpdateManyWithoutPiNestedInput = {
    create?: XOR<PIProjectRelationCreateWithoutPiInput, PIProjectRelationUncheckedCreateWithoutPiInput> | PIProjectRelationCreateWithoutPiInput[] | PIProjectRelationUncheckedCreateWithoutPiInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutPiInput | PIProjectRelationCreateOrConnectWithoutPiInput[]
    upsert?: PIProjectRelationUpsertWithWhereUniqueWithoutPiInput | PIProjectRelationUpsertWithWhereUniqueWithoutPiInput[]
    createMany?: PIProjectRelationCreateManyPiInputEnvelope
    set?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    disconnect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    delete?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    update?: PIProjectRelationUpdateWithWhereUniqueWithoutPiInput | PIProjectRelationUpdateWithWhereUniqueWithoutPiInput[]
    updateMany?: PIProjectRelationUpdateManyWithWhereWithoutPiInput | PIProjectRelationUpdateManyWithWhereWithoutPiInput[]
    deleteMany?: PIProjectRelationScalarWhereInput | PIProjectRelationScalarWhereInput[]
  }

  export type PIProjectRelationUncheckedUpdateManyWithoutPiNestedInput = {
    create?: XOR<PIProjectRelationCreateWithoutPiInput, PIProjectRelationUncheckedCreateWithoutPiInput> | PIProjectRelationCreateWithoutPiInput[] | PIProjectRelationUncheckedCreateWithoutPiInput[]
    connectOrCreate?: PIProjectRelationCreateOrConnectWithoutPiInput | PIProjectRelationCreateOrConnectWithoutPiInput[]
    upsert?: PIProjectRelationUpsertWithWhereUniqueWithoutPiInput | PIProjectRelationUpsertWithWhereUniqueWithoutPiInput[]
    createMany?: PIProjectRelationCreateManyPiInputEnvelope
    set?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    disconnect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    delete?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    connect?: PIProjectRelationWhereUniqueInput | PIProjectRelationWhereUniqueInput[]
    update?: PIProjectRelationUpdateWithWhereUniqueWithoutPiInput | PIProjectRelationUpdateWithWhereUniqueWithoutPiInput[]
    updateMany?: PIProjectRelationUpdateManyWithWhereWithoutPiInput | PIProjectRelationUpdateManyWithWhereWithoutPiInput[]
    deleteMany?: PIProjectRelationScalarWhereInput | PIProjectRelationScalarWhereInput[]
  }

  export type PICreateNestedOneWithoutPiProjectsInput = {
    create?: XOR<PICreateWithoutPiProjectsInput, PIUncheckedCreateWithoutPiProjectsInput>
    connectOrCreate?: PICreateOrConnectWithoutPiProjectsInput
    connect?: PIWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutPiRelationsInput = {
    create?: XOR<ProjectCreateWithoutPiRelationsInput, ProjectUncheckedCreateWithoutPiRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPiRelationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type PIUpdateOneRequiredWithoutPiProjectsNestedInput = {
    create?: XOR<PICreateWithoutPiProjectsInput, PIUncheckedCreateWithoutPiProjectsInput>
    connectOrCreate?: PICreateOrConnectWithoutPiProjectsInput
    upsert?: PIUpsertWithoutPiProjectsInput
    connect?: PIWhereUniqueInput
    update?: XOR<XOR<PIUpdateToOneWithWhereWithoutPiProjectsInput, PIUpdateWithoutPiProjectsInput>, PIUncheckedUpdateWithoutPiProjectsInput>
  }

  export type ProjectUpdateOneRequiredWithoutPiRelationsNestedInput = {
    create?: XOR<ProjectCreateWithoutPiRelationsInput, ProjectUncheckedCreateWithoutPiRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPiRelationsInput
    upsert?: ProjectUpsertWithoutPiRelationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPiRelationsInput, ProjectUpdateWithoutPiRelationsInput>, ProjectUncheckedUpdateWithoutPiRelationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAttendanceSessionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceSession | EnumAttendanceSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceSession[] | null
    notIn?: $Enums.AttendanceSession[] | null
    not?: NestedEnumAttendanceSessionNullableFilter<$PrismaModel> | $Enums.AttendanceSession | null
  }

  export type NestedEnumAttendanceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceType[] | null
    notIn?: $Enums.AttendanceType[] | null
    not?: NestedEnumAttendanceTypeNullableFilter<$PrismaModel> | $Enums.AttendanceType | null
  }

  export type NestedEnumLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[]
    notIn?: $Enums.LocationType[]
    not?: NestedEnumLocationTypeFilter<$PrismaModel> | $Enums.LocationType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceSessionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceSession | EnumAttendanceSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceSession[] | null
    notIn?: $Enums.AttendanceSession[] | null
    not?: NestedEnumAttendanceSessionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceSession | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttendanceSessionNullableFilter<$PrismaModel>
    _max?: NestedEnumAttendanceSessionNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AttendanceType[] | null
    notIn?: $Enums.AttendanceType[] | null
    not?: NestedEnumAttendanceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationType | EnumLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LocationType[]
    notIn?: $Enums.LocationType[]
    not?: NestedEnumLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.LocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumLocationTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AttendanceCreateWithoutUserInput = {
    date: Date | string
    checkinTime?: Date | string | null
    checkoutTime?: Date | string | null
    sessionType?: $Enums.AttendanceSession | null
    attendanceType?: $Enums.AttendanceType | null
    locationType?: $Enums.LocationType
    takenLocation?: string | null
    photoUrl?: string | null
    audioUrl?: string | null
    audioDuration?: number | null
    latitude?: number | null
    longitude?: number | null
    locationAddress?: string | null
    county?: string | null
    state?: string | null
    postcode?: string | null
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    date: Date | string
    checkinTime?: Date | string | null
    checkoutTime?: Date | string | null
    sessionType?: $Enums.AttendanceSession | null
    attendanceType?: $Enums.AttendanceType | null
    locationType?: $Enums.LocationType
    takenLocation?: string | null
    photoUrl?: string | null
    audioUrl?: string | null
    audioDuration?: number | null
    latitude?: number | null
    longitude?: number | null
    locationAddress?: string | null
    county?: string | null
    state?: string | null
    postcode?: string | null
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FieldTripCreateWithoutUserInput = {
    fieldTripKey?: string
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    isActive?: boolean
    createdBy: string
  }

  export type FieldTripUncheckedCreateWithoutUserInput = {
    fieldTripKey?: string
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    isActive?: boolean
    createdBy: string
  }

  export type FieldTripCreateOrConnectWithoutUserInput = {
    where: FieldTripWhereUniqueInput
    create: XOR<FieldTripCreateWithoutUserInput, FieldTripUncheckedCreateWithoutUserInput>
  }

  export type FieldTripCreateManyUserInputEnvelope = {
    data: FieldTripCreateManyUserInput | FieldTripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProjectRelationCreateWithoutUserInput = {
    project: ProjectCreateNestedOneWithoutUserProjectsInput
  }

  export type UserProjectRelationUncheckedCreateWithoutUserInput = {
    projectCode: string
  }

  export type UserProjectRelationCreateOrConnectWithoutUserInput = {
    where: UserProjectRelationWhereUniqueInput
    create: XOR<UserProjectRelationCreateWithoutUserInput, UserProjectRelationUncheckedCreateWithoutUserInput>
  }

  export type UserProjectRelationCreateManyUserInputEnvelope = {
    data: UserProjectRelationCreateManyUserInput | UserProjectRelationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    employeeNumber?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkinTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkoutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    sessionType?: EnumAttendanceSessionNullableFilter<"Attendance"> | $Enums.AttendanceSession | null
    attendanceType?: EnumAttendanceTypeNullableFilter<"Attendance"> | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFilter<"Attendance"> | $Enums.LocationType
    takenLocation?: StringNullableFilter<"Attendance"> | string | null
    photoUrl?: StringNullableFilter<"Attendance"> | string | null
    audioUrl?: StringNullableFilter<"Attendance"> | string | null
    audioDuration?: IntNullableFilter<"Attendance"> | number | null
    latitude?: FloatNullableFilter<"Attendance"> | number | null
    longitude?: FloatNullableFilter<"Attendance"> | number | null
    locationAddress?: StringNullableFilter<"Attendance"> | string | null
    county?: StringNullableFilter<"Attendance"> | string | null
    state?: StringNullableFilter<"Attendance"> | string | null
    postcode?: StringNullableFilter<"Attendance"> | string | null
  }

  export type FieldTripUpsertWithWhereUniqueWithoutUserInput = {
    where: FieldTripWhereUniqueInput
    update: XOR<FieldTripUpdateWithoutUserInput, FieldTripUncheckedUpdateWithoutUserInput>
    create: XOR<FieldTripCreateWithoutUserInput, FieldTripUncheckedCreateWithoutUserInput>
  }

  export type FieldTripUpdateWithWhereUniqueWithoutUserInput = {
    where: FieldTripWhereUniqueInput
    data: XOR<FieldTripUpdateWithoutUserInput, FieldTripUncheckedUpdateWithoutUserInput>
  }

  export type FieldTripUpdateManyWithWhereWithoutUserInput = {
    where: FieldTripScalarWhereInput
    data: XOR<FieldTripUpdateManyMutationInput, FieldTripUncheckedUpdateManyWithoutUserInput>
  }

  export type FieldTripScalarWhereInput = {
    AND?: FieldTripScalarWhereInput | FieldTripScalarWhereInput[]
    OR?: FieldTripScalarWhereInput[]
    NOT?: FieldTripScalarWhereInput | FieldTripScalarWhereInput[]
    fieldTripKey?: StringFilter<"FieldTrip"> | string
    employeeNumber?: StringFilter<"FieldTrip"> | string
    startDate?: DateTimeFilter<"FieldTrip"> | Date | string
    endDate?: DateTimeFilter<"FieldTrip"> | Date | string
    description?: StringNullableFilter<"FieldTrip"> | string | null
    isActive?: BoolFilter<"FieldTrip"> | boolean
    createdBy?: StringFilter<"FieldTrip"> | string
  }

  export type UserProjectRelationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProjectRelationWhereUniqueInput
    update: XOR<UserProjectRelationUpdateWithoutUserInput, UserProjectRelationUncheckedUpdateWithoutUserInput>
    create: XOR<UserProjectRelationCreateWithoutUserInput, UserProjectRelationUncheckedCreateWithoutUserInput>
  }

  export type UserProjectRelationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProjectRelationWhereUniqueInput
    data: XOR<UserProjectRelationUpdateWithoutUserInput, UserProjectRelationUncheckedUpdateWithoutUserInput>
  }

  export type UserProjectRelationUpdateManyWithWhereWithoutUserInput = {
    where: UserProjectRelationScalarWhereInput
    data: XOR<UserProjectRelationUpdateManyMutationInput, UserProjectRelationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProjectRelationScalarWhereInput = {
    AND?: UserProjectRelationScalarWhereInput | UserProjectRelationScalarWhereInput[]
    OR?: UserProjectRelationScalarWhereInput[]
    NOT?: UserProjectRelationScalarWhereInput | UserProjectRelationScalarWhereInput[]
    employeeNumber?: StringFilter<"UserProjectRelation"> | string
    projectCode?: StringFilter<"UserProjectRelation"> | string
  }

  export type UserProjectRelationCreateWithoutProjectInput = {
    user: UserCreateNestedOneWithoutUserProjectsInput
  }

  export type UserProjectRelationUncheckedCreateWithoutProjectInput = {
    employeeNumber: string
  }

  export type UserProjectRelationCreateOrConnectWithoutProjectInput = {
    where: UserProjectRelationWhereUniqueInput
    create: XOR<UserProjectRelationCreateWithoutProjectInput, UserProjectRelationUncheckedCreateWithoutProjectInput>
  }

  export type UserProjectRelationCreateManyProjectInputEnvelope = {
    data: UserProjectRelationCreateManyProjectInput | UserProjectRelationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PIProjectRelationCreateWithoutProjectInput = {
    pi: PICreateNestedOneWithoutPiProjectsInput
  }

  export type PIProjectRelationUncheckedCreateWithoutProjectInput = {
    username: string
  }

  export type PIProjectRelationCreateOrConnectWithoutProjectInput = {
    where: PIProjectRelationWhereUniqueInput
    create: XOR<PIProjectRelationCreateWithoutProjectInput, PIProjectRelationUncheckedCreateWithoutProjectInput>
  }

  export type PIProjectRelationCreateManyProjectInputEnvelope = {
    data: PIProjectRelationCreateManyProjectInput | PIProjectRelationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserProjectRelationUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserProjectRelationWhereUniqueInput
    update: XOR<UserProjectRelationUpdateWithoutProjectInput, UserProjectRelationUncheckedUpdateWithoutProjectInput>
    create: XOR<UserProjectRelationCreateWithoutProjectInput, UserProjectRelationUncheckedCreateWithoutProjectInput>
  }

  export type UserProjectRelationUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserProjectRelationWhereUniqueInput
    data: XOR<UserProjectRelationUpdateWithoutProjectInput, UserProjectRelationUncheckedUpdateWithoutProjectInput>
  }

  export type UserProjectRelationUpdateManyWithWhereWithoutProjectInput = {
    where: UserProjectRelationScalarWhereInput
    data: XOR<UserProjectRelationUpdateManyMutationInput, UserProjectRelationUncheckedUpdateManyWithoutProjectInput>
  }

  export type PIProjectRelationUpsertWithWhereUniqueWithoutProjectInput = {
    where: PIProjectRelationWhereUniqueInput
    update: XOR<PIProjectRelationUpdateWithoutProjectInput, PIProjectRelationUncheckedUpdateWithoutProjectInput>
    create: XOR<PIProjectRelationCreateWithoutProjectInput, PIProjectRelationUncheckedCreateWithoutProjectInput>
  }

  export type PIProjectRelationUpdateWithWhereUniqueWithoutProjectInput = {
    where: PIProjectRelationWhereUniqueInput
    data: XOR<PIProjectRelationUpdateWithoutProjectInput, PIProjectRelationUncheckedUpdateWithoutProjectInput>
  }

  export type PIProjectRelationUpdateManyWithWhereWithoutProjectInput = {
    where: PIProjectRelationScalarWhereInput
    data: XOR<PIProjectRelationUpdateManyMutationInput, PIProjectRelationUncheckedUpdateManyWithoutProjectInput>
  }

  export type PIProjectRelationScalarWhereInput = {
    AND?: PIProjectRelationScalarWhereInput | PIProjectRelationScalarWhereInput[]
    OR?: PIProjectRelationScalarWhereInput[]
    NOT?: PIProjectRelationScalarWhereInput | PIProjectRelationScalarWhereInput[]
    username?: StringFilter<"PIProjectRelation"> | string
    projectCode?: StringFilter<"PIProjectRelation"> | string
  }

  export type UserCreateWithoutAttendancesInput = {
    employeeNumber: string
    username: string
    empClass?: string
    fieldTrips?: FieldTripCreateNestedManyWithoutUserInput
    userProjects?: UserProjectRelationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    employeeNumber: string
    username: string
    empClass?: string
    fieldTrips?: FieldTripUncheckedCreateNestedManyWithoutUserInput
    userProjects?: UserProjectRelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    fieldTrips?: FieldTripUpdateManyWithoutUserNestedInput
    userProjects?: UserProjectRelationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    fieldTrips?: FieldTripUncheckedUpdateManyWithoutUserNestedInput
    userProjects?: UserProjectRelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFieldTripsInput = {
    employeeNumber: string
    username: string
    empClass?: string
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    userProjects?: UserProjectRelationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFieldTripsInput = {
    employeeNumber: string
    username: string
    empClass?: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    userProjects?: UserProjectRelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFieldTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFieldTripsInput, UserUncheckedCreateWithoutFieldTripsInput>
  }

  export type UserUpsertWithoutFieldTripsInput = {
    update: XOR<UserUpdateWithoutFieldTripsInput, UserUncheckedUpdateWithoutFieldTripsInput>
    create: XOR<UserCreateWithoutFieldTripsInput, UserUncheckedCreateWithoutFieldTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFieldTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFieldTripsInput, UserUncheckedUpdateWithoutFieldTripsInput>
  }

  export type UserUpdateWithoutFieldTripsInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    userProjects?: UserProjectRelationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFieldTripsInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    userProjects?: UserProjectRelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserProjectsInput = {
    employeeNumber: string
    username: string
    empClass?: string
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    fieldTrips?: FieldTripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProjectsInput = {
    employeeNumber: string
    username: string
    empClass?: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    fieldTrips?: FieldTripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProjectsInput, UserUncheckedCreateWithoutUserProjectsInput>
  }

  export type ProjectCreateWithoutUserProjectsInput = {
    projectCode: string
    department: string
    piRelations?: PIProjectRelationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserProjectsInput = {
    projectCode: string
    department: string
    piRelations?: PIProjectRelationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserProjectsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserProjectsInput, ProjectUncheckedCreateWithoutUserProjectsInput>
  }

  export type UserUpsertWithoutUserProjectsInput = {
    update: XOR<UserUpdateWithoutUserProjectsInput, UserUncheckedUpdateWithoutUserProjectsInput>
    create: XOR<UserCreateWithoutUserProjectsInput, UserUncheckedCreateWithoutUserProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProjectsInput, UserUncheckedUpdateWithoutUserProjectsInput>
  }

  export type UserUpdateWithoutUserProjectsInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    fieldTrips?: FieldTripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProjectsInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    empClass?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    fieldTrips?: FieldTripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutUserProjectsInput = {
    update: XOR<ProjectUpdateWithoutUserProjectsInput, ProjectUncheckedUpdateWithoutUserProjectsInput>
    create: XOR<ProjectCreateWithoutUserProjectsInput, ProjectUncheckedCreateWithoutUserProjectsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUserProjectsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUserProjectsInput, ProjectUncheckedUpdateWithoutUserProjectsInput>
  }

  export type ProjectUpdateWithoutUserProjectsInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    piRelations?: PIProjectRelationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserProjectsInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    piRelations?: PIProjectRelationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PIProjectRelationCreateWithoutPiInput = {
    project: ProjectCreateNestedOneWithoutPiRelationsInput
  }

  export type PIProjectRelationUncheckedCreateWithoutPiInput = {
    projectCode: string
  }

  export type PIProjectRelationCreateOrConnectWithoutPiInput = {
    where: PIProjectRelationWhereUniqueInput
    create: XOR<PIProjectRelationCreateWithoutPiInput, PIProjectRelationUncheckedCreateWithoutPiInput>
  }

  export type PIProjectRelationCreateManyPiInputEnvelope = {
    data: PIProjectRelationCreateManyPiInput | PIProjectRelationCreateManyPiInput[]
    skipDuplicates?: boolean
  }

  export type PIProjectRelationUpsertWithWhereUniqueWithoutPiInput = {
    where: PIProjectRelationWhereUniqueInput
    update: XOR<PIProjectRelationUpdateWithoutPiInput, PIProjectRelationUncheckedUpdateWithoutPiInput>
    create: XOR<PIProjectRelationCreateWithoutPiInput, PIProjectRelationUncheckedCreateWithoutPiInput>
  }

  export type PIProjectRelationUpdateWithWhereUniqueWithoutPiInput = {
    where: PIProjectRelationWhereUniqueInput
    data: XOR<PIProjectRelationUpdateWithoutPiInput, PIProjectRelationUncheckedUpdateWithoutPiInput>
  }

  export type PIProjectRelationUpdateManyWithWhereWithoutPiInput = {
    where: PIProjectRelationScalarWhereInput
    data: XOR<PIProjectRelationUpdateManyMutationInput, PIProjectRelationUncheckedUpdateManyWithoutPiInput>
  }

  export type PICreateWithoutPiProjectsInput = {
    username: string
  }

  export type PIUncheckedCreateWithoutPiProjectsInput = {
    username: string
  }

  export type PICreateOrConnectWithoutPiProjectsInput = {
    where: PIWhereUniqueInput
    create: XOR<PICreateWithoutPiProjectsInput, PIUncheckedCreateWithoutPiProjectsInput>
  }

  export type ProjectCreateWithoutPiRelationsInput = {
    projectCode: string
    department: string
    userProjects?: UserProjectRelationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPiRelationsInput = {
    projectCode: string
    department: string
    userProjects?: UserProjectRelationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPiRelationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPiRelationsInput, ProjectUncheckedCreateWithoutPiRelationsInput>
  }

  export type PIUpsertWithoutPiProjectsInput = {
    update: XOR<PIUpdateWithoutPiProjectsInput, PIUncheckedUpdateWithoutPiProjectsInput>
    create: XOR<PICreateWithoutPiProjectsInput, PIUncheckedCreateWithoutPiProjectsInput>
    where?: PIWhereInput
  }

  export type PIUpdateToOneWithWhereWithoutPiProjectsInput = {
    where?: PIWhereInput
    data: XOR<PIUpdateWithoutPiProjectsInput, PIUncheckedUpdateWithoutPiProjectsInput>
  }

  export type PIUpdateWithoutPiProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type PIUncheckedUpdateWithoutPiProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithoutPiRelationsInput = {
    update: XOR<ProjectUpdateWithoutPiRelationsInput, ProjectUncheckedUpdateWithoutPiRelationsInput>
    create: XOR<ProjectCreateWithoutPiRelationsInput, ProjectUncheckedCreateWithoutPiRelationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPiRelationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPiRelationsInput, ProjectUncheckedUpdateWithoutPiRelationsInput>
  }

  export type ProjectUpdateWithoutPiRelationsInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userProjects?: UserProjectRelationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPiRelationsInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    userProjects?: UserProjectRelationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AttendanceCreateManyUserInput = {
    date: Date | string
    checkinTime?: Date | string | null
    checkoutTime?: Date | string | null
    sessionType?: $Enums.AttendanceSession | null
    attendanceType?: $Enums.AttendanceType | null
    locationType?: $Enums.LocationType
    takenLocation?: string | null
    photoUrl?: string | null
    audioUrl?: string | null
    audioDuration?: number | null
    latitude?: number | null
    longitude?: number | null
    locationAddress?: string | null
    county?: string | null
    state?: string | null
    postcode?: string | null
  }

  export type FieldTripCreateManyUserInput = {
    fieldTripKey?: string
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    isActive?: boolean
    createdBy: string
  }

  export type UserProjectRelationCreateManyUserInput = {
    projectCode: string
  }

  export type AttendanceUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkinTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkoutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionType?: NullableEnumAttendanceSessionFieldUpdateOperationsInput | $Enums.AttendanceSession | null
    attendanceType?: NullableEnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType | null
    locationType?: EnumLocationTypeFieldUpdateOperationsInput | $Enums.LocationType
    takenLocation?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableIntFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FieldTripUpdateWithoutUserInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type FieldTripUncheckedUpdateWithoutUserInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type FieldTripUncheckedUpdateManyWithoutUserInput = {
    fieldTripKey?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserProjectRelationUpdateWithoutUserInput = {
    project?: ProjectUpdateOneRequiredWithoutUserProjectsNestedInput
  }

  export type UserProjectRelationUncheckedUpdateWithoutUserInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserProjectRelationUncheckedUpdateManyWithoutUserInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserProjectRelationCreateManyProjectInput = {
    employeeNumber: string
  }

  export type PIProjectRelationCreateManyProjectInput = {
    username: string
  }

  export type UserProjectRelationUpdateWithoutProjectInput = {
    user?: UserUpdateOneRequiredWithoutUserProjectsNestedInput
  }

  export type UserProjectRelationUncheckedUpdateWithoutProjectInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
  }

  export type UserProjectRelationUncheckedUpdateManyWithoutProjectInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PIProjectRelationUpdateWithoutProjectInput = {
    pi?: PIUpdateOneRequiredWithoutPiProjectsNestedInput
  }

  export type PIProjectRelationUncheckedUpdateWithoutProjectInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type PIProjectRelationUncheckedUpdateManyWithoutProjectInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type PIProjectRelationCreateManyPiInput = {
    projectCode: string
  }

  export type PIProjectRelationUpdateWithoutPiInput = {
    project?: ProjectUpdateOneRequiredWithoutPiRelationsNestedInput
  }

  export type PIProjectRelationUncheckedUpdateWithoutPiInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
  }

  export type PIProjectRelationUncheckedUpdateManyWithoutPiInput = {
    projectCode?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}