// lib/api.ts
export async function postData(path: string, data: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      throw new Error("API error");
    }
  
    return res.json();
  }
  