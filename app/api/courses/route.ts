import {
    supabase
} from "@/lib/supabase";
import {
    NextResponse
} from "next/server";

export async function GET() {
    const {
        data,
        error
    } = await supabase
        .from("courses")
        .select();

    if (error) {
        return NextResponse.json({
            succes: false,
            message: error.message
        }, {
            status: 500
        });
    }

    return NextResponse.json(
        {
            success: true,
            data
        },
        {
            status: 200
        }
    );
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.title || !body.price) {
    return NextResponse.json(
      {
        success: false,
        message: "Title and price are required",
      },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("courses")
    .insert([
      {
        title: body.title,
        description: body.description,
        price: body.price,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Course created",
      data,
    },
    { status: 201 }
  );
}
