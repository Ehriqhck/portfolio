import { connectToDB } from '@utils/database'
import { log } from 'console'
import User from '@models/user.js'
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

// export const GET = async (request, ) => {

//   try {
//     await connectToDB()

//     const data = await User.findOne({ _id:'656ec352bd375007c9585a2d'})
//     // const existingId = await user.id;

//     // const data = await User.find({});

//     return new Response(JSON.stringify(data), { status: 200 })

//   } catch (error) {
//     console.log(error)
//     log(error)
//     return new Response('Failed to fetch device profiles', { status: 500 })
//   }
// }

// export const PATCH = async (request, { params }) => {
//   const { userId, selectedAction, selectedInput, selectedLayer } = await request.json()

//   try {
//     await connectToDB()
//     var device = 'VKB_GLADIATOR_EVO'
//     var selectQuery =
//       'deviceProfiles.deviceProfiles.saved.' +
//       device +
//       '.buttons.' +
//       selectedInput.button +
//       '.' + selectedInput.slot + '.layers.' +
//       selectedLayer

//     var query = {}
//     query[selectQuery] = selectedAction

//     await User.findOneAndUpdate({ _id: userId }, query)
//     const updatedData = await User.findOne({ _id: userId })

//     return new Response(JSON.stringify(updatedData), { status: 200 })
//   } catch (error) {
//     console.log(error)
//     log(error)
//     return new Response('Failed to fetch device profiles', { status: 500 })
//   }
// }
// Import necessary modules
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { setCookie, getCookies } from 'cookies-next'
import stringify from 'xml-stringify';

// Define the POST handler for the file upload
export const POST = async (req, res) => {
    const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "",
        // attributesGroupName: "@_"

    });

    // Parse the incoming form data
    const formData = await req.formData();
    console.log("TEST CONSOLE");
    // Get the file from the form data
    const file = formData.get("file");

    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    // Convert the file data to a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Replace spaces in the file name with underscores
    const filename = file.name.replaceAll(" ", "_");
    console.log(filename);
    try {
        let result = parser.parse(buffer, {
            ignoreAttributes: false,
        });
        console.log('RESULTT', result, JSON.stringify(result),
         );

        // Write the file to the specified directory (public/assets) with the modified filename
        // await writeFile(
        //     path.join(process.cwd(), "public/assets/" + filename),
        //     buffer
        // );
        // return NextResponse.json(result);
        return new Response(JSON.stringify(result), { status: 200 })

    } catch (error) {
        console.log("Error occurred ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
};