export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!baseUrl || !apiKey) {
    return new Response('Missing BASE_URL or API_KEY', { status: 500 });
  }

  try {
    const response = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
    const result = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify(result), { status: response.status });
    }
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}