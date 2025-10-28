import ts from "typescript"

function transpile(sourceText, fileName, jsxOption) {
  const result = ts.transpileModule(sourceText, {
    compilerOptions: {
      allowJs: true,
      jsx: jsxOption,
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      sourceMap: true,
    },
    fileName,
    reportDiagnostics: false,
  })

  const mapText = result.sourceMapText
  if (!mapText) {
    return { text: result.outputText }
  }

  const map = JSON.parse(mapText)
  map.version = Number(map.version) || 3
  map.sources = [fileName]
  map.file = fileName
  map.sourcesContent = [sourceText]

  return { text: result.outputText, map }
}

function createProcessor(jsxOption) {
  return {
    preprocess(text, filename) {
      const { text: outputText, map } = transpile(text, filename, jsxOption)
      return map ? [{ text: outputText, map }] : [outputText]
    },
    postprocess(messages) {
      return messages[0] ?? []
    },
    supportsAutofix: true,
  }
}

export default {
  processors: {
    ts: createProcessor(ts.JsxEmit.None),
    tsx: createProcessor(ts.JsxEmit.Preserve),
  },
}
