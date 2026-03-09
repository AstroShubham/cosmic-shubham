const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, dob, tob, pob, mobile, message } = await req.json();

    if (!name || !dob || !tob || !pob || !mobile) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; color: #f5f0e8; padding: 30px; border-radius: 12px;">
        <div style="text-align: center; border-bottom: 2px solid #d4a843; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="color: #d4a843; margin: 0; font-size: 24px;">🙏 New Consultation Request</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px; color: #d4a843; font-weight: bold; width: 40%;">Full Name</td><td style="padding: 10px; color: #f5f0e8;">${name}</td></tr>
          <tr style="background: rgba(212,168,67,0.1);"><td style="padding: 10px; color: #d4a843; font-weight: bold;">Date of Birth</td><td style="padding: 10px; color: #f5f0e8;">${dob}</td></tr>
          <tr><td style="padding: 10px; color: #d4a843; font-weight: bold;">Time of Birth</td><td style="padding: 10px; color: #f5f0e8;">${tob}</td></tr>
          <tr style="background: rgba(212,168,67,0.1);"><td style="padding: 10px; color: #d4a843; font-weight: bold;">Place of Birth</td><td style="padding: 10px; color: #f5f0e8;">${pob}</td></tr>
          <tr><td style="padding: 10px; color: #d4a843; font-weight: bold;">Mobile Number</td><td style="padding: 10px; color: #f5f0e8;">${mobile}</td></tr>
          ${message ? `<tr style="background: rgba(212,168,67,0.1);"><td style="padding: 10px; color: #d4a843; font-weight: bold;">Message</td><td style="padding: 10px; color: #f5f0e8;">${message}</td></tr>` : ''}
        </table>
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(212,168,67,0.3); color: rgba(245,240,232,0.5); font-size: 12px;">
          Sent from Ask Astro Shubham Website
        </div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Ask Astro Shubham <onboarding@resend.dev>',
        to: ['askastroshubham@gmail.com'],
        subject: `New Consultation Request from ${name}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
