export interface Metrics {
  updateResolverMetrics (resolverInfo: any, responseTime: number): void
  recordConflictMetrics(resolverInfo: any): void
}
