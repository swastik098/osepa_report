export const getFieldConfigs = (colorMode) => {
  const isDark = colorMode === 'dark'

  return {
    // 🟩 Structural Counts
    'Number of Districts': { color: isDark ? '#8BC34A' : '#AED581' },
    'Number of Blocks': { color: isDark ? '#66BB6A' : '#81C784' },
    'Number of Clusters': { color: isDark ? '#4CAF50' : '#66BB6A' },
    'Number of Groups': { color: isDark ? '#009688' : '#4DB6AC' },

    // 🟦 Student & School Metrics
    'Total Students': { color: isDark ? '#42A5F5' : '#64B5F6' },
    'Number of Students': { color: isDark ? '#42A5F5' : '#64B5F6' },
    'Total Schools': { color: isDark ? '#29B6F6' : '#4FC3F7' },
    'Total number of schools': { color: isDark ? '#29B6F6' : '#4FC3F7' },
    'Total no of Schools': { color: isDark ? '#29B6F6' : '#4FC3F7' },

    // 🟪 Contact Info
    'Total Contact Numbers': { color: isDark ? '#AB47BC' : '#BA68C8' },

    // 🟨 Content Sharing Metrics
    'Number of Content Shared': { color: isDark ? '#FBC02D' : '#FFD54F' },
    'Weekly Class wise Content Shared (Classes 1 to 10)': { color: isDark ? '#F9A825' : '#FFCA28' },
    'Number of Content Read': { color: isDark ? '#F57F17' : '#FFB300' },

    // 🟧 Media Shared
    'Videos Received': { color: isDark ? '#FF7043' : '#FF8A65' },
    'Images Received': { color: isDark ? '#F4511E' : '#FF7043' },
    'Audios Received': { color: isDark ? '#E64A19' : '#FF5722' },

    // 🟫 Class-wise Student Counts
    'Class wise Number of Students (Classes 1 to 10)': { color: isDark ? '#8D6E63' : '#A1887F' },
    'Class wise no of students (1 to 10)': { color: isDark ? '#8D6E63' : '#A1887F' },
    'Class wise no of students': { color: isDark ? '#8D6E63' : '#A1887F' },

    // 🟥 Communication
    'Two-way Interaction Messages': { color: isDark ? '#EF5350' : '#E57373' },
  }
}
