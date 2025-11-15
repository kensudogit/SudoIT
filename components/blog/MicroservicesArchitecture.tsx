import styles from './article-content.module.css'
import ShareButtons from '@/components/ShareButtons'

export default function MicroservicesArchitecture() {
  const title = 'マイクロサービスアーキテクチャ：構成と構築手順'
  const url = 'https://sudoit-portfolio.vercel.app/blog/microservices-architecture'

  return (
    <>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>アーキテクチャ</span>
          <time className={styles.date}>2024-01-25</time>
          <span className={styles.readTime}>読了時間: 25分</span>
        </div>
        <h1 className={styles.title}>マイクロサービスアーキテクチャ：構成と構築手順</h1>
        <p className={styles.subtitle}>
          マイクロサービスアーキテクチャの設計から実装、運用まで。AWS/Docker/Kubernetesを使った実践的な構築手順を詳細に解説します。
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. マイクロサービスアーキテクチャとは</h2>
          <p>
            マイクロサービスアーキテクチャは、アプリケーションを小さな独立したサービスに分割し、
            それぞれが独立して開発・デプロイ・スケールできるようにするアーキテクチャパターンです。
            各サービスは明確に定義されたAPIを通じて通信し、ビジネス機能を実現します。
          </p>

          <h3>1.1 マイクロサービスアーキテクチャの特徴</h3>
          <ul>
            <li><strong>独立性</strong>：各サービスは独立して開発・デプロイ・スケール可能</li>
            <li><strong>技術的多様性</strong>：サービスごとに異なる技術スタックを使用可能</li>
            <li><strong>障害の分離</strong>：1つのサービスの障害が他のサービスに影響しない</li>
            <li><strong>チームの独立性</strong>：各サービスを異なるチームが担当可能</li>
            <li><strong>スケーラビリティ</strong>：必要なサービスだけをスケール可能</li>
          </ul>

          <h3>1.2 モノリシックアーキテクチャとの比較</h3>
          <div className={styles.traceabilityTable}>
            <table>
              <thead>
                <tr>
                  <th>観点</th>
                  <th>モノリシック</th>
                  <th>マイクロサービス</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>デプロイ</td>
                  <td>全体を一度にデプロイ</td>
                  <td>サービスごとに独立してデプロイ</td>
                </tr>
                <tr>
                  <td>スケーリング</td>
                  <td>全体をスケール</td>
                  <td>必要なサービスだけスケール</td>
                </tr>
                <tr>
                  <td>技術スタック</td>
                  <td>統一された技術スタック</td>
                  <td>サービスごとに異なる技術スタック可能</td>
                </tr>
                <tr>
                  <td>複雑性</td>
                  <td>開発・テストが簡単</td>
                  <td>運用・監視が複雑</td>
                </tr>
                <tr>
                  <td>データ管理</td>
                  <td>共有データベース</td>
                  <td>サービスごとに独立したデータベース</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>2. マイクロサービスの設計原則</h2>

          <h3>2.1 サービス境界の定義</h3>
          <p>サービスをどのように分割するかが重要です。以下の原則に従います：</p>
          <ul>
            <li><strong>ビジネス機能による分割</strong>：ドメイン駆動設計（DDD）の境界コンテキストに基づく</li>
            <li><strong>データの独立性</strong>：各サービスが独自のデータベースを持つ</li>
            <li><strong>疎結合</strong>：サービス間の依存関係を最小化</li>
            <li><strong>高凝集</strong>：関連する機能を同じサービスにまとめる</li>
          </ul>

          <h3>2.2 サービス間通信</h3>
          <p>マイクロサービス間の通信方式：</p>

          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <h4>同期通信（REST/GraphQL）</h4>
              <p><strong>用途</strong>：リアルタイム性が重要な場合</p>
              <p><strong>メリット</strong>：シンプル、理解しやすい</p>
              <p><strong>デメリット</strong>：サービス間の結合が強くなる</p>
            </div>
            <div className={styles.toolCard}>
              <h4>非同期通信（メッセージキュー）</h4>
              <p><strong>用途</strong>：非同期処理、イベント駆動</p>
              <p><strong>メリット</strong>：疎結合、スケーラブル</p>
              <p><strong>デメリット</strong>：複雑性が増す</p>
            </div>
            <div className={styles.toolCard}>
              <h4>gRPC</h4>
              <p><strong>用途</strong>：高性能が求められる場合</p>
              <p><strong>メリット</strong>：高速、型安全</p>
              <p><strong>デメリット</strong>：HTTP/2が必要</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. アーキテクチャパターン</h2>

          <h3>3.1 API Gateway パターン</h3>
          <p>すべてのクライアントリクエストをAPI Gatewayが受け取り、適切なマイクロサービスにルーティングします。</p>

          <div className={styles.codeBlock}>
            <h4>API Gatewayの役割</h4>
            <ul>
              <li>ルーティング：リクエストを適切なサービスに転送</li>
              <li>認証・認可：統一された認証処理</li>
              <li>レート制限：過剰なリクエストの制限</li>
              <li>ロードバランシング：複数のサービスインスタンスへの分散</li>
              <li>モニタリング：リクエストのログとメトリクス収集</li>
            </ul>
          </div>

          <h3>3.2 サービスディスカバリ</h3>
          <p>サービスが動的に起動・停止する環境では、サービスディスカバリが必要です。</p>

          <div className={styles.exampleBox}>
            <h4>サービスディスカバリの実装例（Eureka）</h4>
            <div className={styles.codeBlock}>
              <pre>{`// Eureka Serverの設定
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// application.yml
server:
  port: 8761
eureka:
  instance:
    hostname: localhost
  client:
    registerWithEureka: false
    fetchRegistry: false

// マイクロサービスの設定
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
  instance:
    preferIpAddress: true`}</pre>
            </div>
          </div>

          <h3>3.3 設定管理</h3>
          <p>各サービスの設定を一元管理するために、設定サーバーを使用します。</p>

          <div className={styles.codeBlock}>
            <pre>{`// Spring Cloud Config Server
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}

// 設定ファイル（Gitリポジトリ）
// application.yml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: \${DB_USER}
    password: \${DB_PASSWORD}

// マイクロサービスでの使用
@RefreshScope
@RestController
public class ConfigController {
    @Value("\${app.message}")
    private String message;
    
    @GetMapping("/config")
    public String getConfig() {
        return message;
    }
}`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>4. Dockerによるコンテナ化</h2>

          <h3>4.1 Dockerfileの作成</h3>
          <p>各マイクロサービスをDockerコンテナ化します：</p>

          <div className={styles.codeBlock}>
            <h4>Spring BootアプリケーションのDockerfile例</h4>
            <pre>{`# マルチステージビルド
FROM maven:3.8.6-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`}</pre>
          </div>

          <h3>4.2 Docker Composeによるローカル環境構築</h3>
          <div className={styles.codeBlock}>
            <pre>{`version: '3.8'

services:
  # Eureka Server
  eureka-server:
    image: eureka-server:latest
    ports:
      - "8761:8761"
    networks:
      - microservices-network

  # Config Server
  config-server:
    image: config-server:latest
    ports:
      - "8888:8888"
    environment:
      - SPRING_PROFILES_ACTIVE=native
    networks:
      - microservices-network

  # User Service
  user-service:
    image: user-service:latest
    ports:
      - "8081:8080"
    environment:
      - EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_CONFIG_URI=http://config-server:8888
    depends_on:
      - eureka-server
      - config-server
      - postgres
    networks:
      - microservices-network

  # Order Service
  order-service:
    image: order-service:latest
    ports:
      - "8082:8080"
    environment:
      - EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_CONFIG_URI=http://config-server:8888
    depends_on:
      - eureka-server
      - config-server
      - postgres
    networks:
      - microservices-network

  # API Gateway
  api-gateway:
    image: api-gateway:latest
    ports:
      - "8080:8080"
    environment:
      - EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE=http://eureka-server:8761/eureka/
    depends_on:
      - eureka-server
    networks:
      - microservices-network

  # PostgreSQL
  postgres:
    image: postgres:14
    environment:
      - POSTGRES_DB=microservices
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - microservices-network

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - microservices-network

volumes:
  postgres-data:

networks:
  microservices-network:
    driver: bridge`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. Kubernetesへのデプロイ</h2>

          <h3>5.1 Kubernetesマニフェストの作成</h3>
          <p>各サービスをKubernetesにデプロイするためのマニフェストを作成します：</p>

          <div className={styles.codeBlock}>
            <h4>Deployment例</h4>
            <pre>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
  labels:
    app: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 8080
        env:
        - name: EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE
          value: "http://eureka-server:8761/eureka/"
        - name: SPRING_DATASOURCE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: ClusterIP`}</pre>
          </div>

          <h3>5.2 Ingressの設定</h3>
          <div className={styles.codeBlock}>
            <pre>{`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - api.example.com
    secretName: api-tls
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /users
        pathType: Prefix
        backend:
          service:
            name: user-service
            port:
              number: 80
      - path: /orders
        pathType: Prefix
        backend:
          service:
            name: order-service
            port:
              number: 80`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>6. 監視とロギング</h2>

          <h3>6.1 分散トレーシング</h3>
          <p>マイクロサービス間のリクエストを追跡するために、分散トレーシングを使用します。</p>

          <div className={styles.exampleBox}>
            <h4>Zipkinによる分散トレーシング</h4>
            <div className={styles.codeBlock}>
              <pre>{`// Spring Bootでの設定
dependencies {
    implementation 'org.springframework.cloud:spring-cloud-starter-zipkin'
}

// application.yml
spring:
  zipkin:
    base-url: http://zipkin:9411
  sleuth:
    sampler:
      probability: 1.0  # 本番では0.1などに設定`}</pre>
            </div>
          </div>

          <h3>6.2 ログ集約</h3>
          <p>各サービスのログを集約して管理します。</p>

          <div className={styles.codeBlock}>
            <pre>{`# ELK Stack (Elasticsearch, Logstash, Kibana)
# docker-compose.yml
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.5.0
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"
  
  logstash:
    image: docker.elastic.co/logstash/logstash:8.5.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    depends_on:
      - elasticsearch
  
  kibana:
    image: docker.elastic.co/kibana/kibana:8.5.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>7. まとめ</h2>
          <p>
            マイクロサービスアーキテクチャは、大規模なアプリケーションを管理しやすくする強力なパターンです。
            適切に設計・実装することで、スケーラビリティ、保守性、開発速度を向上させることができます。
          </p>
          <p>重要なポイント：</p>
          <ul>
            <li>サービス境界の適切な定義</li>
            <li>サービス間通信の設計</li>
            <li>コンテナ化とオーケストレーション</li>
            <li>監視とロギングの実装</li>
            <li>段階的な移行戦略</li>
          </ul>
        </section>

        <ShareButtons title={title} url={url} />
      </div>
    </>
  )
}

