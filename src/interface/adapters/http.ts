export const ok = (data: unknown) => ({
  body: data,
  status: 200
})

export const badRequest = (data: unknown) => ({
  body: data,
  status: 400
})