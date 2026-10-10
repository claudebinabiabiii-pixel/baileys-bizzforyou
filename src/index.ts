// ============================================================
// 🎨 BIZZOFFICIAL1 CUSTOM BANNER
// ============================================================
console.log(`
\x1b[36m
═══════════════════════════════════════════════════════
\x1b[33m   ⚡ BIZZOFFICIAL1 OFFICIAL ⚡\x1b[36m
═══════════════════════════════════════════════════════

\x1b[32m══════ [ BIZZOFFICIAL1 ] ══════\x1b[0m
\x1b[36mInformation:\x1b[0m
Developer  : \x1b[33mBizz\x1b[0m
Version    : \x1b[33m1.0.0\x1b[0m
Status     : \x1b[32mBaileys Berhasil Terinstall\x1b[0m
Update     : \x1b[33m09/10/2026\x1b[0m

\x1b[35m✨ Modified Baileys by Bizz ✨\x1b[0m

\x1b[32mHi, Thanks For Using My Modified Baileys\x1b[0m

\x1b[36mFollow : @BizzOfficial1 For More Update\x1b[0m
\x1b[36m═══════════════════════════════════════════════════════
\x1b[0m
`);

// ============================================================
// EXPORTS
// ============================================================
import makeWASocket from './Socket/index'

export * from './WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
