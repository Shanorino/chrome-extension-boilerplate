export const storage = {
    async get<T = unknown>(key: string, fallback: T): Promise<T> {
        try {
            const raw = localStorage.getItem(key)
            return (raw ? JSON.parse(raw) : fallback) as T
        } catch {
            return fallback
        }
    },
    async set<T = unknown>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}
