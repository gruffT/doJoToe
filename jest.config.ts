import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  setupFilesAfterEnv: [
    './jest.setUpTests.ts',
  ],
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
});
