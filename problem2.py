n, k = map(int, raw_input().split())
l = map(int, raw_input().split())

cost = []
for i in range(1, n):
  cost.append((l[i]*l[i]) - (l[i-1]*l[i-1]))

cost.sort()
print sum(cost[:n-k])