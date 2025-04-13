'use server'

import { redirect } from "next/navigation";

export const HandleSearchUserCodeFromSubmit = async (formData: FormData) => {
    const inputValue = formData.get('userCode') as string;

    redirect(`/pages/search?userCode=${inputValue}`)
}