/*
 * Copyright 2014 Takuya Asano
 * Copyright 2010-2014 Atilika Inc. and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

var TokenizerBuilder = require("./TokenizerBuilder");
var DictionaryBuilder = require("./dict/builder/DictionaryBuilder");
var DynamicDictionaries = require("./dict/DynamicDictionaries");
var BrowserDictionaryLoader = require("./loader/BrowserDictionaryLoader");
var Tokenizer = require("./Tokenizer");
var TokenInfoDictionary = require("./dict/TokenInfoDictionary");
var ConnectionCosts = require("./dict/ConnectionCosts");
var UnknownDictionary = require("./dict/UnknownDictionary");
var CharacterDefinition = require("./dict/CharacterDefinition");
var doublearray = require("doublearray");

// Public methods
var kuromoji = {
    doublearray: doublearray,
    DynamicDictionaries: DynamicDictionaries,
    TokenInfoDictionary: TokenInfoDictionary,
    ConnectionCosts: ConnectionCosts,
    UnknownDictionary: UnknownDictionary,
    CharacterDefinition: CharacterDefinition,
    Tokenizer: Tokenizer,
    DictionaryLoader: BrowserDictionaryLoader,
    builder: function (option) {
        return new TokenizerBuilder(option);
    },
    dictionaryBuilder: function () {
        return new DictionaryBuilder();
    }
};

module.exports = kuromoji;
