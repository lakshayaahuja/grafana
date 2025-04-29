

### Prerequisites

- Docker
- Go (for backend/driver)
- Node.js and npm (for frontend)
- Mage (`go install github.com/magefile/mage@latest`)
- `chmod` access for signing scripts


# Bloom Project Setup

This project includes:
- `bloom-bloom-datasource` — custom Grafana datasource plugin
- `bloom-bloom-panel` — custom Grafana panel plugin
- `rest-server` — backend REST API server
- `docker-compose.yml` — to orchestrate the services

---

## 📂 Project Structure

```plaintext
bloom-bloom-datasource/     # Grafana datasource plugin
bloom-bloom-panel/          # Grafana panel plugin
rest-server/                # Backend server
docker-compose.yml          # Docker orchestration
```

# Install for datasource plugin
cd bloom-bloom-datasource
npm install

# Install for panel plugin
cd ../bloom-bloom-panel
npm install

# Install for REST server
cd ../rest-server
npm install

# Build datasource plugin
cd ../bloom-bloom-datasource
npm run build

# Build panel plugin
cd ../bloom-bloom-panel
npm run build

# Mage
cd ../bloom-bloom-datasource
mage -v

If not installed, run:
go install github.com/magefile/mage@latest


# Start both Grafana and the REST server under main folder

docker-compose up --build


# Build and run the REST server
# Start Grafana with plugins loaded


Once the services are running:

Open your browser and visit:
👉 http://localhost:3000

Default Grafana credentials:
| Username | Password |
  |:---------|:---------|
  | admin    | admin    |

# Adding Metrics Endpoint
Set http://localhost:3001/metrics as your datasource URL in Grafana.


# Notes
Ensure that the REST server (rest-server) is properly running and accessible from Grafana.
Grafana will automatically detect and load the built plugins if placed correctly.
