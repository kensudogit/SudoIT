import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>お問い合わせ</h2>
          <p className={styles.sectionDesc}>
            新規開発・既存システムの改修・DX相談など、まずはお気軽にご相談ください。
            <br />
            ご相談内容を拝見した上で、オンライン打ち合わせの日程をご提案いたします。
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong className={styles.label}>メール：</strong>
              <a href="mailto:kensudo@jcom.zaq.ne.jp" className={styles.emailLink}>
                kensudo@jcom.zaq.ne.jp
              </a>
            </div>
            <div className={styles.contactItem}>
              <strong className={styles.label}>所在地：</strong>
              <span>東京都三鷹市 ほか（リモート中心で全国対応）</span>
            </div>
            <div className={styles.contactItem}>
              <strong className={styles.label}>初回相談：</strong>
              <span>無料（30〜60分程度／オンライン）</span>
            </div>
          </div>
          <div className={styles.note}>
            <p className={styles.noteTitle}>※お問い合わせの際は、以下の情報をお書き添えいただけますとスムーズです。</p>
            <ul className={styles.list}>
              <li>ご相談内容の概要（新規開発 / 改修 / DX相談など）</li>
              <li>現状のシステム・環境（わかる範囲で結構です）</li>
              <li>ご希望のスケジュール感</li>
              <li>ご予算の目安（未定でも可）</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

