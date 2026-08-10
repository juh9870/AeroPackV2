#!/usr/bin/env nu

def main [] {
    update_tag_stacker
}

def update_tag_stacker [] {
    let serverCfgPath = "../config/tag_stacker-server.toml"
    let jsonDataPath = "../config/tag_stacker_tags.json"
    open $serverCfgPath | update items.tags (open $jsonDataPath) | save -f $serverCfgPath
}