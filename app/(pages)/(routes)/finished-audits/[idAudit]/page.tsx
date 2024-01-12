'use client';

import React, { useState } from 'react';

export default function Results() {
  const [defaultPdfFile] = useState('/report.pdf');

  return (
    <div className="w-full h-[720px] overflow-y-auto flex justify-center items-center">
      {defaultPdfFile && (
        <iframe
          src="/report.pdf"
          title="PDF Viewer"
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
