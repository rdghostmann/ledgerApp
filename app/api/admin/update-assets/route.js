import { updateUserAssets } from "@/controllers/getUsersandAssets"

export async function POST(request) {
  const { userId, assets } = await request.json()
  try {
    await updateUserAssets(userId, assets)
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}