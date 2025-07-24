| Experiment | lr   | batch\_size | lambda\_l1 | epochs | Notes                     |
| ---------- | ---- | ----------- | ---------- | ------ | ------------------------- |
| `exp1`     | 2e-4 | 4           | 100        | 10     | Your current baseline     |
| `exp2`     | 1e-4 | 4           | 100        | 20     | Lower lr, more epochs     |
| `exp3`     | 2e-4 | 8           | 100        | 10     | Bigger batch              |
| `exp4`     | 2e-4 | 4           | 50         | 10     | Lower L1 focus            |
| `exp5`     | 3e-4 | 4           | 200        | 10     | More adversarial, less L1 |
