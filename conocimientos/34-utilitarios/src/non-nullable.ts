type TDate = string | Date | null | undefined
type TDateNonNullable = NonNullable<TDate>
//   ^?

const date: TDateNonNullable = new Date()