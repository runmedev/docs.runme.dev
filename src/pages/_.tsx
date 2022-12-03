import React from 'react';
import Layout from '@theme/Layout';

/**
 * Docusarus doesn't span the Tailwind context around the header
 * so this file includes TW classes that would otherwise not be
 * compiled into the CSS file
 */
export default function _() {
  return (
    <Layout>
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"></h1>
    </Layout>
  );
}
