import styles from './article-content.module.css'
import ShareButtons from '@/components/ShareButtons'

export default function AIDrivenDevelopment() {
  const title = 'AI駆動開発：実務で使える実践テクニック'
  const url = 'https://sudoit-portfolio.vercel.app/blog/ai-driven-development'

  return (
    <>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>AI・自動化</span>
          <time className={styles.date}>2024-01-20</time>
          <span className={styles.readTime}>読了時間: 20分</span>
        </div>
        <h1 className={styles.title}>AI駆動開発：実務で使える実践テクニック</h1>
        <p className={styles.subtitle}>
          AIを開発の中心に据えた効率的な開発手法。コード生成、テスト自動化、ドキュメント作成など、実務で即活用できる方法を解説します。
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. AI駆動開発とは</h2>
          <p>
            AI駆動開発（AI-Driven Development）は、AIツールを開発プロセスの各段階で活用し、
            開発効率と品質を向上させる開発手法です。コード生成、レビュー、テスト、ドキュメント作成など、
            従来手作業で行っていた作業をAIに支援させることで、開発者はより創造的な作業に集中できます。
          </p>

          <h3>1.1 AI駆動開発のメリット</h3>
          <ul>
            <li><strong>開発速度の向上</strong>：ボイラープレートコードの生成や反復作業の自動化により、開発時間を大幅に短縮</li>
            <li><strong>コード品質の向上</strong>：AIによるコードレビューで、バグやセキュリティ問題を早期発見</li>
            <li><strong>知識の共有</strong>：AIがベストプラクティスやパターンを提案し、チーム全体のスキル向上</li>
            <li><strong>ドキュメントの自動生成</strong>：コードから自動的にドキュメントを生成し、保守性を向上</li>
            <li><strong>テストの自動化</strong>：AIがテストケースを生成し、カバレッジを向上</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. AIツールの選定と導入</h2>

          <h3>2.1 主要なAI開発ツール</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <h4>GitHub Copilot</h4>
              <p>コード補完と生成。IDEに統合され、リアルタイムでコード提案を行います。</p>
              <p><strong>適用場面</strong>：関数実装、テストコード生成、リファクタリング</p>
            </div>
            <div className={styles.toolCard}>
              <h4>ChatGPT / Claude</h4>
              <p>コードレビュー、設計相談、ドキュメント作成など、幅広い用途で活用できます。</p>
              <p><strong>適用場面</strong>：アーキテクチャ設計、バグ修正、技術調査</p>
            </div>
            <div className={styles.toolCard}>
              <h4>Cursor / Cline</h4>
              <p>AI統合型エディタ。コード生成、リファクタリング、説明生成を統合的にサポートします。</p>
              <p><strong>適用場面</strong>：大規模リファクタリング、新機能実装</p>
            </div>
            <div className={styles.toolCard}>
              <h4>Amazon CodeWhisperer</h4>
              <p>AWSサービスとの統合が強く、クラウド開発に最適化されています。</p>
              <p><strong>適用場面</strong>：AWS SDKの使用、Lambda関数の実装</p>
            </div>
          </div>

          <h3>2.2 ツール選定のポイント</h3>
          <ul>
            <li><strong>プロジェクトの技術スタック</strong>：使用言語やフレームワークに対応しているか</li>
            <li><strong>チームのスキルレベル</strong>：学習コストと効果のバランス</li>
            <li><strong>コスト</strong>：ライセンス費用とROI</li>
            <li><strong>セキュリティ</strong>：コードが外部に送信される場合のセキュリティポリシー</li>
            <li><strong>統合性</strong>：既存の開発環境との統合のしやすさ</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. コード生成の実践</h2>

          <h3>3.1 効果的なプロンプト設計</h3>
          <p>AIにコードを生成させる際は、具体的で構造化されたプロンプトが重要です：</p>

          <div className={styles.exampleBox}>
            <h4>良いプロンプトの例</h4>
            <div className={styles.codeBlock}>
              <pre>{`プロンプト：
「Spring BootでREST APIを作成してください。
要件：
- エンドポイント: POST /api/users
- リクエストボディ: { "name": string, "email": string, "password": string }
- バリデーション: emailは形式チェック、passwordは8文字以上
- レスポンス: 201 Created、作成されたユーザー情報を返す
- エラーハンドリング: バリデーションエラーは400 Bad Request
- データベース: JPAを使用してUserエンティティに保存
- セキュリティ: パスワードはBCryptでハッシュ化

コードスタイル：
- Java 17
- Lombokを使用
- 例外処理は@ControllerAdviceで統一
- ログはSLF4Jを使用」`}</pre>
            </div>
          </div>

          <h3>3.2 コード生成のワークフロー</h3>
          <div className={styles.processBox}>
            <div className={styles.processStep}>
              <h4>ステップ1: 要件の明確化</h4>
              <p>AIに伝える前に、自分で要件を明確にします。入力、出力、処理内容、エラーケースを整理します。</p>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ2: プロンプトの作成</h4>
              <p>要件を構造化してプロンプトに変換します。技術スタック、コーディング規約、パターンも指定します。</p>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ3: コード生成とレビュー</h4>
              <p>AIが生成したコードを必ずレビューします。セキュリティ、パフォーマンス、保守性を確認します。</p>
              <div className={styles.codeBlock}>
                <pre>{`// AI生成コードのレビューチェックリスト
□ セキュリティ：SQLインジェクション、XSS対策は？
□ エラーハンドリング：適切に例外処理されているか？
□ パフォーマンス：N+1問題、不要なクエリはないか？
□ 可読性：変数名、関数名は適切か？
□ テスト：テスト可能な構造になっているか？
□ ドキュメント：コメントやJavadocは適切か？`}</pre>
              </div>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ4: リファクタリング</h4>
              <p>生成されたコードをプロジェクトの規約に合わせてリファクタリングします。</p>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ5: テストの作成</h4>
              <p>生成されたコードに対して、AIにテストケースも生成させます。</p>
            </div>
          </div>

          <h3>3.3 実践例：ユーザー管理APIの実装</h3>
          <p>実際の開発例を示します：</p>

          <div className={styles.codeBlock}>
            <h4>1. エンティティの生成</h4>
            <pre>{`// AIプロンプト: "JPAエンティティUserを作成。id, name, email, password, createdAt, updatedAtフィールドを持つ。Lombokを使用。"

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 100)
    private String name;
    
    @Column(nullable = false, unique = true, length = 255)
    @Email
    private String email;
    
    @Column(nullable = false)
    private String passwordHash;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}`}</pre>
          </div>

          <div className={styles.codeBlock}>
            <h4>2. サービスクラスの生成</h4>
            <pre>{`// AIプロンプト: "UserServiceを作成。ユーザー登録、メール重複チェック、パスワードハッシュ化を含む。"

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public UserResponse createUser(CreateUserRequest request) {
        // メール重複チェック
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateEmailException("Email already exists: " + request.getEmail());
        }
        
        // パスワードハッシュ化
        String passwordHash = passwordEncoder.encode(request.getPassword());
        
        // ユーザー作成
        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .passwordHash(passwordHash)
            .build();
        
        User savedUser = userRepository.save(user);
        log.info("User created: {}", savedUser.getId());
        
        return UserResponse.from(savedUser);
    }
}`}</pre>
          </div>

          <div className={styles.codeBlock}>
            <h4>3. コントローラーの生成</h4>
            <pre>{`// AIプロンプト: "RESTコントローラーUserControllerを作成。POST /api/usersエンドポイントを実装。"

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Validated
public class UserController {
    private final UserService userService;
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        UserResponse response = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>4. テスト自動化</h2>

          <h3>4.1 テストケース生成</h3>
          <p>AIにテストケースを生成させることで、テストカバレッジを向上させます：</p>

          <div className={styles.codeBlock}>
            <h4>プロンプト例</h4>
            <pre>{`「以下のUserServiceのcreateUserメソッドに対して、
JUnit 5とMockitoを使用した包括的なテストクラスを作成してください。

テストケース：
1. 正常系：ユーザーが正常に作成される
2. 異常系：メールアドレスが重複している場合
3. 異常系：無効なメール形式の場合
4. 異常系：パスワードが短すぎる場合
5. 境界値：境界値のテスト

各テストケースには適切なアサーションとモック設定を含めてください。」`}</pre>
          </div>

          <div className={styles.codeBlock}>
            <h4>生成されたテストコード例</h4>
            <pre>{`@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    
    @Mock
    private PasswordEncoder passwordEncoder;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    @DisplayName("正常系：ユーザーが正常に作成される")
    void createUser_Success() {
        // Given
        CreateUserRequest request = new CreateUserRequest(
            "山田太郎", "test@example.com", "Password123"
        );
        when(userRepository.existsByEmail(request.getEmail())).thenReturn(false);
        when(passwordEncoder.encode(request.getPassword())).thenReturn("hashedPassword");
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> {
            User user = invocation.getArgument(0);
            user.setId(1L);
            return user;
        });
        
        // When
        UserResponse response = userService.createUser(request);
        
        // Then
        assertNotNull(response);
        assertEquals("山田太郎", response.getName());
        assertEquals("test@example.com", response.getEmail());
        verify(userRepository).save(any(User.class));
        verify(passwordEncoder).encode(request.getPassword());
    }
    
    @Test
    @DisplayName("異常系：メールアドレスが重複している場合")
    void createUser_DuplicateEmail() {
        // Given
        CreateUserRequest request = new CreateUserRequest(
            "山田太郎", "existing@example.com", "Password123"
        );
        when(userRepository.existsByEmail(request.getEmail())).thenReturn(true);
        
        // When & Then
        assertThrows(DuplicateEmailException.class, () -> {
            userService.createUser(request);
        });
        verify(userRepository, never()).save(any());
    }
}`}</pre>
          </div>

          <h3>4.2 統合テストの生成</h3>
          <p>APIエンドポイントの統合テストもAIに生成させます：</p>

          <div className={styles.codeBlock}>
            <pre>{`@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class UserControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void createUser_Success() throws Exception {
        CreateUserRequest request = new CreateUserRequest(
            "山田太郎", "test@example.com", "Password123"
        );
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("山田太郎"))
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }
}`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. コードレビューの自動化</h2>

          <h3>5.1 AIによるコードレビュー</h3>
          <p>AIにコードレビューを依頼することで、以下の観点でチェックできます：</p>
          <ul>
            <li><strong>セキュリティ</strong>：脆弱性、認証・認可の問題</li>
            <li><strong>パフォーマンス</strong>：N+1問題、不要なループ、メモリリーク</li>
            <li><strong>コード品質</strong>：可読性、保守性、設計パターンの適用</li>
            <li><strong>ベストプラクティス</strong>：言語やフレームワークの推奨事項</li>
          </ul>

          <div className={styles.exampleBox}>
            <h4>コードレビューのプロンプト例</h4>
            <div className={styles.codeBlock}>
              <pre>{`「以下のJavaコードをレビューしてください。
以下の観点でチェックしてください：
1. セキュリティの問題（SQLインジェクション、XSSなど）
2. パフォーマンスの問題（N+1問題、不要なクエリなど）
3. コードの品質（可読性、保守性）
4. エラーハンドリングの適切性
5. テストの容易性

改善提案も含めてください。

[コードを貼り付け]」`}</pre>
            </div>
          </div>

          <h3>5.2 レビュー結果の活用</h3>
          <p>AIのレビュー結果を以下のように活用します：</p>
          <ol>
            <li><strong>優先度の付け</strong>：セキュリティやバグに関わる問題を優先的に修正</li>
            <li><strong>チームでの議論</strong>：AIの提案を参考に、チームで設計を議論</li>
            <li><strong>学習機会</strong>：AIの指摘から、ベストプラクティスを学習</li>
            <li><strong>ドキュメント化</strong>：重要な指摘をドキュメントに残し、再発防止</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>6. ドキュメント自動生成</h2>

          <h3>6.1 APIドキュメントの生成</h3>
          <p>コードからAPIドキュメントを自動生成します：</p>

          <div className={styles.codeBlock}>
            <h4>プロンプト例</h4>
            <pre>{`「以下のREST APIコントローラーのコードから、
OpenAPI 3.0形式のAPIドキュメントを生成してください。
各エンドポイントの説明、リクエスト/レスポンスのスキーマ、
エラーレスポンスも含めてください。

[コントローラーコードを貼り付け]」`}</pre>
          </div>

          <h3>6.2 実装ドキュメントの生成</h3>
          <p>実装の説明やアーキテクチャ図もAIに生成させます：</p>

          <div className={styles.exampleBox}>
            <h4>ドキュメント生成のワークフロー</h4>
            <ol>
              <li>コードの主要な部分をAIに提示</li>
              <li>「このコードの動作を説明してください」と依頼</li>
              <li>生成された説明をMarkdown形式で整理</li>
              <li>図が必要な場合は、Mermaid記法で図を生成</li>
            </ol>
          </div>
        </section>

        <section className={styles.section}>
          <h2>7. リファクタリング支援</h2>

          <h3>7.1 リファクタリングの提案</h3>
          <p>AIにリファクタリングを依頼する際のプロンプト例：</p>

          <div className={styles.codeBlock}>
            <pre>{`「以下のコードをリファクタリングしてください。
要件：
1. 単一責任の原則に従う
2. 依存性注入を使用
3. エラーハンドリングを改善
4. テスト可能な構造にする
5. パフォーマンスを最適化

リファクタリング前後の比較も示してください。

[コードを貼り付け]」`}</pre>
          </div>

          <h3>7.2 大規模リファクタリング</h3>
          <p>大規模なリファクタリングでは、段階的に進めます：</p>
          <ol>
            <li><strong>影響範囲の分析</strong>：AIに影響範囲を分析させます</li>
            <li><strong>リファクタリング計画</strong>：段階的なリファクタリング計画を立てます</li>
            <li><strong>各ステップの実装</strong>：小さな単位でリファクタリングを実施</li>
            <li><strong>テストの更新</strong>：リファクタリングに合わせてテストを更新</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>8. 実践的なTipsと注意点</h2>

          <h3>8.1 効果的なAI活用のコツ</h3>
          <ul>
            <li><strong>具体的なプロンプト</strong>：抽象的な依頼ではなく、具体的な要件を伝える</li>
            <li><strong>コンテキストの提供</strong>：関連するコードやドキュメントも一緒に提示する</li>
            <li><strong>反復的な改善</strong>：生成されたコードを基に、さらに改善を依頼する</li>
            <li><strong>複数のAIツールの併用</strong>：用途に応じて最適なツールを使い分ける</li>
          </ul>

          <h3>8.2 注意すべき点</h3>
          <div className={styles.warningBox}>
            <h4>セキュリティリスク</h4>
            <p>AIツールに機密情報を含むコードを送信しないでください。企業のセキュリティポリシーを確認し、必要に応じてオンプレミス版を使用します。</p>
          </div>

          <div className={styles.warningBox}>
            <h4>コードの品質</h4>
            <p>AIが生成したコードは必ずレビューします。特にセキュリティ、パフォーマンス、エラーハンドリングは人間が確認する必要があります。</p>
          </div>

          <div className={styles.warningBox}>
            <h4>依存しすぎない</h4>
            <p>AIに依存しすぎると、基本的なスキルが低下する可能性があります。AIは「支援ツール」として使い、理解しながら活用します。</p>
          </div>

          <h3>8.3 チーム導入のポイント</h3>
          <ul>
            <li><strong>段階的な導入</strong>：まずは個人で試し、効果を確認してからチームに展開</li>
            <li><strong>ガイドラインの作成</strong>：AIツールの使用方法、プロンプトのテンプレートを共有</li>
            <li><strong>レビュープロセスの見直し</strong>：AI生成コードのレビュー方法を明確化</li>
            <li><strong>学習機会の提供</strong>：AIツールの効果的な使い方を学ぶ機会を設ける</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. まとめ</h2>
          <p>
            AI駆動開発は、開発効率と品質を大幅に向上させる可能性を秘めています。
            しかし、AIは「魔法の杖」ではなく、適切に使うことで初めて効果を発揮します。
          </p>
          <p>成功の鍵は：</p>
          <ul>
            <li>具体的で構造化されたプロンプトの作成</li>
            <li>生成されたコードの必ずレビュー</li>
            <li>セキュリティと品質への配慮</li>
            <li>チーム全体での適切な活用方法の共有</li>
          </ul>
          <p>
            AIを「開発のパートナー」として位置づけ、人間の創造性とAIの効率性を組み合わせることで、
            より高品質なソフトウェアを、より短い時間で開発できるようになります。
          </p>
        </section>

        <ShareButtons title={title} url={url} />
      </div>
    </>
  )
}

