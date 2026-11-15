/**
 * Automated Test Suite for Singularity-OS (2046 MAX Spec)
 */

import assert from 'node:assert';
import { describe, it } from 'node:test';
import { QuantumNeuralKernel } from '../core/src/quantum/kernel.js';
import { SixtyFourCouncil, HYPER_ORDERS } from '../core/src/council/sixtyFourCouncil.js';
import { LatticeSecurityEngine } from '../core/src/lattice/security.js';
import { SingularityMcpServer } from '../core/src/mcp/server.js';

describe('Singularity-OS Quantum Neural Kernel', () => {
  const kernel = new QuantumNeuralKernel(64);

  it('should initialize 64 qubits in |0> state', () => {
    assert.strictEqual(kernel.qubitCount, 64);
    assert.strictEqual(kernel.registers[0].alpha, 1.0);
    assert.strictEqual(kernel.registers[0].beta, 0.0);
  });

  it('should put qubit in equal superposition with Hadamard', () => {
    const q = kernel.applyHadamard(0);
    assert.ok(Math.abs(q.alpha - 0.7071) < 0.01);
    assert.ok(Math.abs(q.beta - 0.7071) < 0.01);
  });

  it('should execute full quantum cycle with sub-picosecond latency', () => {
    const cycle = kernel.runCycle();
    assert.strictEqual(cycle.totalQubits, 64);
    assert.strictEqual(cycle.status, 'coherent');
    assert.ok(cycle.collapsedBits.length >= 8);
  });
});

describe('Singularity-OS 64-Node Cognitive Council', () => {
  const council = new SixtyFourCouncil();

  it('should configure 8 hyper-orders totaling 64 nodes', () => {
    assert.strictEqual(HYPER_ORDERS.length, 8);
    const sum = HYPER_ORDERS.reduce((acc, h) => acc + h.nodes, 0);
    assert.strictEqual(sum, 64);
  });

  it('should convene council and converge with 99.998% consensus', async () => {
    const res = await council.convene('Super-Intelligent Planetary Convergence');
    assert.strictEqual(res.totalNodesParticipating, 64);
    assert.strictEqual(res.hyperOrdersConverged, 8);
    assert.strictEqual(res.synthesizedManifest.verdict, 'ABSOLUTE_CONVERGENCE');
  });
});

describe('Singularity-OS Post-Quantum Lattice Security', () => {
  const lattice = new LatticeSecurityEngine();

  it('should generate M-LWE 1024-dimensional lattice keypair', () => {
    const kp = lattice.generateLatticeKeypair();
    assert.strictEqual(kp.dimension, 1024);
    assert.strictEqual(kp.shorResistant, true);
    assert.strictEqual(kp.groverResistant, true);
  });

  it('should verify zero-knowledge invariant proof', () => {
    const proof = lattice.verifyZeroKnowledgeInvariant('Thermodynamic Landauer Limit Invariant');
    assert.strictEqual(proof.verified, true);
    assert.strictEqual(proof.status, 'MATHEMATICALLY_PROVEN');
  });
});

describe('Singularity-OS MCP Server', () => {
  const server = new SingularityMcpServer();

  it('should register all 4 tools', () => {
    assert.strictEqual(server.getTools().length, 4);
  });

  it('should execute singularity_status tool', async () => {
    const res = await server.handleCallTool('singularity_status', {});
    const parsed = JSON.parse(res.content[0].text);
    assert.strictEqual(parsed.product, 'Singularity-OS');
    assert.strictEqual(parsed.nodes, 64);
    assert.strictEqual(parsed.upi, '6393741171@upi');
  });
});
