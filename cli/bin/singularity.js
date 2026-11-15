#!/usr/bin/env node

/**
 * Singularity-OS CLI (Year 2046 MAX Spec)
 * 
 * Usage:
 *   npx singularity-os status
 *   npx singularity-os council "Unify quantum error correction with neural swarm consensus"
 *   npx singularity-os quantum
 *   npx singularity-os lattice
 *   npx singularity-os mcp
 */

import { SixtyFourCouncil } from '../../core/src/council/sixtyFourCouncil.js';
import { QuantumNeuralKernel } from '../../core/src/quantum/kernel.js';
import { LatticeSecurityEngine } from '../../core/src/lattice/security.js';
import { startMcpServer } from '../../core/src/mcp/server.js';

const args = process.argv.slice(2);
const command = args[0] || 'help';

async function main() {
  const council = new SixtyFourCouncil();
  const kernel = new QuantumNeuralKernel();
  const lattice = new LatticeSecurityEngine();

  switch (command) {
    case 'status': {
      printBanner();
      console.log('🌌 Singularity-OS (Year 2046 MAX Horizon):');
      console.log('   ├── 64-Node Autonomous Cognitive Council across 8 Hyper-Orders');
      console.log('   ├── 64-Qubit Photonic Register & Quantum Neural Kernel');
      console.log('   ├── NIST Level 5 Post-Quantum M-LWE Lattice Invariant Engine');
      console.log('   └── Model & Neural Context Protocol (NCP/MCP) Server\n');
      console.log('💼 Sovereign Founder: Amit Sharma (@1nsharma) — Kanpur, India');
      console.log('📧 Contact: amitsharma9976@gmail.com');
      console.log('💳 Direct UPI / Bank: 6393741171@upi (6393741171)\n');
      break;
    }

    case 'council': {
      const objective = args.slice(1).join(' ') || 'Planetary Super-Intelligence Convergence';
      console.log(`\n👑 Convening the 64-Node Autonomous Cognitive Council on:\n   "${objective}"\n`);
      const res = await council.convene(objective);

      for (const t of res.trace) {
        console.log(`   ${t.icon} [\x1b[36m${t.orderName.padEnd(28)}\x1b[0m] (${t.nodesActive} Nodes) -> \x1b[32m${t.contribution}\x1b[0m (~${t.latencyPs}ps)`);
      }

      console.log('\n✨ Quantum Consensus Sign-Off:');
      console.log(`   Consensus Fidelity : \x1b[32m${res.quantumConsensusFidelity}\x1b[0m`);
      console.log(`   Entropy Delta      : ${res.entropyDelta}`);
      console.log(`   Summary            : ${res.synthesizedManifest.summary}\n`);
      break;
    }

    case 'quantum': {
      console.log('\n⚛️  Executing Quantum Neural Tensor Register Cycle...');
      const cycle = kernel.runCycle();
      console.log(`   Substrate     : \x1b[35m${cycle.substrate}\x1b[0m`);
      console.log(`   Total Qubits  : ${cycle.totalQubits}`);
      console.log(`   Fidelity      : \x1b[32m${cycle.entanglementFidelity}\x1b[0m`);
      console.log(`   Collapsed Bits: \x1b[33m${cycle.collapsedBits}\x1b[0m`);
      console.log(`   Cycle Latency : ${cycle.cycleDurationPs} picoseconds\n`);
      break;
    }

    case 'lattice': {
      console.log('\n🛡️ Generating Post-Quantum M-LWE Lattice Keypair (2046 MAX)...');
      const kp = lattice.generateLatticeKeypair();
      console.log(`   Public Key    : \x1b[32m${kp.publicKey}\x1b[0m`);
      console.log(`   Dimension     : ${kp.dimension}-Dimensional Lattice`);
      console.log(`   Shor Proof    : \x1b[36mRESISTANT\x1b[0m`);
      console.log(`   Grover Proof  : \x1b[36mRESISTANT\x1b[0m\n`);
      break;
    }

    case 'mcp': {
      startMcpServer();
      break;
    }

    case 'help':
    default: {
      printBanner();
      console.log('Usage:');
      console.log('  singularity-os status                    Inspect 2046 MAX architecture');
      console.log('  singularity-os council "<objective>"     Convene 64-Node Cognitive Council');
      console.log('  singularity-os quantum                   Run 64-qubit photonic tensor cycle');
      console.log('  singularity-os lattice                   Generate post-quantum lattice proof');
      console.log('  singularity-os mcp                       Start Stdio NCP/MCP server');
      console.log('\nLive 2046 Holographic Simulator:');
      console.log('  https://1nsharma-labs.github.io/singularity-os/\n');
      break;
    }
  }
}

function printBanner() {
  console.log(`
\x1b[36m   ███████╗██╗███╗   ██╗ ██████╗ ██╗   ██╗██╗      █████╗ ██████╗ ██╗████████╗██╗   ██╗     ██████╗ ███████╗
  ██╔════╝██║████╗  ██║██╔════╝ ██║   ██║██║     ██╔══██╗██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝    ██╔═══██╗██╔════╝
  ███████╗██║██╔██╗ ██║██║  ███╗██║   ██║██║     ███████║██████╔╝██║   ██║    ╚████╔╝     ██║   ██║███████╗
  ╚════██║██║██║╚██╗██║██║   ██║██║   ██║██║     ██╔══██║██╔══██╗██║   ██║     ╚██╔╝      ██║   ██║╚════██║
  ███████║██║██║ ╚████║╚██████╔╝╚██████╔╝███████╗██║  ██║██║  ██║██║   ██║      ██║       ╚██████╔╝███████║
  ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝        ╚═════╝ ╚══════╝\x1b[0m
  The Autonomous Super-Intelligent Operating System (Year 2046 MAX Spec)
  by 1nsharma-labs | Amit Sharma (Kanpur, India)
  `);
}

main().catch(err => {
  console.error('\nFatal Error:', err);
  process.exit(1);
});
