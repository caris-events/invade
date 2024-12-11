var util_store = {
    relativeTime(unixTime) {
        const now = Date.now()
        const diff_seconds = Math.floor((now - unixTime * 1000) / 1000)
        const diff_days = Math.floor(diff_seconds / 86400)
        const diff_weeks = Math.floor(diff_days / 7)
        const diff_months = Math.floor(diff_days / 30.44)
        const diff_years = Math.floor(diff_days / 365)

        if (diff_days == 0) {
            return `今天`
        } else if (diff_days < 7) {
            return ` ${diff_days} 天前`
        } else if (diff_months == 0) {
            return ` ${diff_weeks} 個星期前`
        } else if (diff_years == 0) {
            return ` ${diff_months} 個月前`
        } else {
            return ` ${diff_years} 年前`
        }
    },
}
