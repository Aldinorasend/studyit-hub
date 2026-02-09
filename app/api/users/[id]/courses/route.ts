import {
    supabase
} from "@/lib/supabase"
import {
    NextResponse
} from "next/server"

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id: user_id } = await context.params;
    if (!user_id) {
        return NextResponse.json({
            success: false,
            message: "User id is required",
        }, {
            status: 400
        });
    }
    const {error:userError}
    = await supabase
        .from("users")
        .select('id')
        .eq("id", user_id)
        .single();
    if(userError){
        return NextResponse.json({
                success: false,
                message: "User not found",
            }, {
                status: 404
            });
    }
    const {
        data,
        error
    } = await supabase
        .from("enrollments")
        .select(`
      id,
      courses (
        id,
        title,
        description,
        price
      )
    `)
        .eq("user_id", user_id);
    if (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        }, {
            status: 500
        });
    }

    return NextResponse.json({
        success: true,
        data,
    }, {
        status: 200
    });

}