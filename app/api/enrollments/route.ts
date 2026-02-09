import {
    supabase
} from "@/lib/supabase"

import {
    NextResponse
} from "next/server"


export async function GET() {
    const {
        data,
        error
    } = await supabase
        .from('enrollments')
        .select();

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, {
            status: 500
        });
    }

    return NextResponse.json({
        success: true,
        data
    }, {
        status: 200
    });
}

export async function POST(req: Request) {
    try {

        const body = await req.json();
        const {
            user_id,
            course_id
        } = body;

        if (!user_id || !course_id) {
            return NextResponse.json({
                success: false,
                message: 'User Id and Course Id are required'
            }, {
                status: 400
            });
        }
        const {
            data: user, error: userError
        } = await supabase
            .from("users")
            .select("id")
            .eq("id", user_id)
            .single();
        if (userError) {
            return NextResponse.json({
                success: false,
                message: "User not found",
            }, {
                status: 404
            });
        }

        const {
            data: course, error: courseError
        } = await supabase
            .from("courses")
            .select("id")
            .eq("id", course_id)
            .single();
        if (courseError) {
            return NextResponse.json({
                success: false,
                message: "Course not found",
            }, {
                status: 404
            });
        }

        const {
            data,
            error
        } = await supabase
            .from("enrollments")
            .insert([{
                user_id,
                course_id
            }, ])
            .select();

        // Duplicate entry
        if (error) {
            return NextResponse.json({
                success: false,
                message: "User already enrolled in this course"
            }, {
                status: 500
            });
        }

        return NextResponse.json({
            success: true,
            message: 'Enrollment successful',
            data,

        }, {
            status: 201
        });
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: "Server Error"
        }, {
            status: 500
        })
    }


}