export async function fetchConfig() {
    const response = await fetch('/config.json');
    if (!response.ok) {
      throw new Error('Failed to fetch configuration');
    }
    const config = await response.json();
    return config;
  }