export function NewFeature() {
  return (
    <div className="new-feature">
      <h1>🎉 New Feature Component</h1>
      <p>This is a brand new feature added via pull request!</p>
      <button onClick={() => alert('Feature working!')}>
        Click me
      </button>
    </div>
  );
}

