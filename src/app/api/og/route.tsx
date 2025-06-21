import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #6366f1, #f9a8d4)',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '40px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              margin: '0 0 20px 0',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Swati Singh
          </h1>
          <h2
            style={{
              fontSize: '40px',
              margin: '0 0 40px 0',
              textAlign: 'center',
              opacity: 0.9,
            }}
          >
            HR Manager | Talent Acquisition | Training Expert
          </h2>
          <div
            style={{
              fontSize: '28px',
              maxWidth: '800px',
              textAlign: 'center',
              opacity: 0.8,
            }}
          >
            Specialized in recruitment and student placement
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
