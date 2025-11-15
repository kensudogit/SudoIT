'use client'

import { useState } from 'react'
import styles from './AIDocumentForm.module.css'

interface FormData {
  department: string
  position: string
  lastName: string
  firstName: string
  email: string
  additionalRequirements: string
}

interface AIContent {
  serviceOverview: string
  recommendedServices: string
  expectedEffects: string
  implementationSteps: string
  supportSystem: string
  riskManagement: string
  investmentReturn: string
  additionalRequirementsResponse: string
}

export default function AIDocumentForm() {
  const [formData, setFormData] = useState<FormData>({
    department: '',
    position: '',
    lastName: '',
    firstName: '',
    email: '',
    additionalRequirements: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [aiContent, setAiContent] = useState<AIContent | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setAiContent(null)

    // バリデーション
    if (!formData.lastName || !formData.firstName || !formData.email) {
      setError('姓、名、メールアドレスは必須項目です。')
      return
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('有効なメールアドレスを入力してください。')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/generate-ai-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || '資料生成に失敗しました。')
      }

      const data = await response.json()
      setAiContent(data.content)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || '資料生成中にエラーが発生しました。')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              姓 <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>
              名 <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              メールアドレス <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={isLoading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="department" className={styles.label}>
              部署
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="position" className={styles.label}>
              役職
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="additionalRequirements" className={styles.label}>
            追加要件・ご要望
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="ご要望や追加要件があれば、こちらにご記入ください。"
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className={styles.errorMessage} role="alert">
            {error}
          </div>
        )}

        {success && (
          <div className={styles.successMessage} role="alert">
            資料の生成が完了しました！
          </div>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className={styles.loading}>
              <span className={styles.spinner}></span>
              生成中...
            </span>
          ) : (
            'AI資料を生成'
          )}
        </button>
      </form>

      {aiContent && (
        <div style={{ marginTop: '40px', padding: '24px', background: '#f9fafb', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '1.2rem', fontWeight: 600 }}>生成された資料</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>サービス概要</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.serviceOverview}</p>
            </section>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>推奨サービス</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.recommendedServices}</p>
            </section>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>期待される効果</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.expectedEffects}</p>
            </section>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>導入ステップ</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.implementationSteps}</p>
            </section>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>サポート体制</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.supportSystem}</p>
            </section>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>リスク管理</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.riskManagement}</p>
            </section>
            <section>
              <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>投資対効果</h5>
              <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.investmentReturn}</p>
            </section>
            {aiContent.additionalRequirementsResponse && (
              <section>
                <h5 style={{ marginBottom: '8px', fontSize: '1rem', fontWeight: 600 }}>追加要件への回答</h5>
                <p style={{ lineHeight: '1.8', color: '#374151' }}>{aiContent.additionalRequirementsResponse}</p>
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

