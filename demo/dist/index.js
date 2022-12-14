import { LRParser } from '@lezer/lr';
import { completeFromList } from '@codemirror/autocomplete';
import { LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "!WQYQPOOOhQPO'#CdOOQO'#Ci'#CiOOQO'#Ce'#CeQYQPOOOOQO,59O,59OOyQPO,59OOOQO-E6c-E6cOOQO1G.j1G.j",
  stateData: "![~O[OSPOS~ORQOSQOTQOVPO~ORQOSQOTQOUTOVPO~ORQOSQOTQOUWOVPO~O",
  goto: "u^PPPPPPPP_ePPPoXQOPSUQSOQUPTVSUXROPSU",
  nodeNames: "⚠ LineComment Program Identifier String Boolean ) ( Application",
  maxTerm: 13,
  nodeProps: [
    ["openedBy", 6,"("],
    ["closedBy", 7,")"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 1,
  tokenData: "%c~R^XY}YZ}]^}pq}rs!`st#|xy$[yz$a}!O$f!Q![$f!]!^$z!c!}$f#R#S$f#T#o$f~!SS[~XY}YZ}]^}pq}~!cVOr!`rs!xs#O!`#O#P!}#P;'S!`;'S;=`#v<%lO!`~!}OS~~#QRO;'S!`;'S;=`#Z;=`O!`~#^WOr!`rs!xs#O!`#O#P!}#P;'S!`;'S;=`#v;=`<%l!`<%lO!`~#yP;=`<%l!`~$PQ#Y#Z$V#h#i$V~$[OT~~$aOV~~$fOU~~$kTR~}!O$f!Q![$f!c!}$f#R#S$f#T#o$f~%PSP~OY$zZ;'S$z;'S;=`%]<%lO$z~%`P;=`<%l$z",
  tokenizers: [0],
  topRules: {"Program":[0,2]},
  tokenPrec: 0
});

const EXAMPLELanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Application: delimitedIndent({ closing: ")", align: false })
            }),
            foldNodeProp.add({
                Application: foldInside
            }),
            styleTags({
                Identifier: tags.variableName,
                Boolean: tags.bool,
                String: tags.string,
                LineComment: tags.lineComment,
                "( )": tags.paren
            })
        ]
    }),
    languageData: {
        commentTokens: { line: ";" }
    }
});
const exampleCompletion = EXAMPLELanguage.data.of({
    autocomplete: completeFromList([
        { label: "defun", type: "keyword" },
        { label: "defvar", type: "keyword" },
        { label: "let", type: "keyword" },
        { label: "cons", type: "function" },
        { label: "car", type: "function" },
        { label: "cdr", type: "function" }
    ])
});
function EXAMPLE() {
    return new LanguageSupport(EXAMPLELanguage, [exampleCompletion]);
}

export { EXAMPLE, EXAMPLELanguage, exampleCompletion };
